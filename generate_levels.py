"""
generate_levels.py
Reads levels_data.json and automatically generates:
- src/levels/gate01.js ... src/levels/gate19.js
- src/levels/index.js
Ensures every line of codeHint contains at least one blank/dash '____'.
"""

import json
import os
import re

LEVELS_DIR = os.path.join(os.path.dirname(__file__), 'src', 'levels')
DATA_FILE = os.path.join(os.path.dirname(__file__), 'levels_data.json')

def ensure_dashed_hint(code_hint: str) -> str:
    lines = code_hint.strip().split('\n')
    processed_lines = []
    for line in lines:
        if not line.strip():
            continue
        # If line doesn't already have blank underscores (at least 3 underscores)
        if '___' not in line:
            # Replace keywords or identifier with dashes
            words = re.findall(r'[a-zA-Z0-9_$]+', line)
            if words:
                longest_word = max(words, key=len)
                line = line.replace(longest_word, '____', 1)
            else:
                line += ' // ____'
        processed_lines.append(line)
    return '\n'.join(processed_lines)

def main():
    if not os.path.exists(DATA_FILE):
        print(f"Error: {DATA_FILE} not found!")
        return

    with open(DATA_FILE, 'r', encoding='utf-8') as f:
        data = json.load(f)

    levels = data.get('levels', [])
    if not levels:
        print("No levels found in JSON!")
        return

    os.makedirs(LEVELS_DIR, exist_ok=True)

    # Clean existing level files in src/levels
    for filename in os.listdir(LEVELS_DIR):
        if (filename.startswith('level') or filename.startswith('gate')) and filename.endswith('.js'):
            filepath = os.path.join(LEVELS_DIR, filename)
            os.remove(filepath)
            print(f"Removed old level file: {filename}")

    generated_files = []

    for index, lvl in enumerate(levels, start=1):
        num_str = f"{index:02d}"
        var_name = f"gate{num_str}"
        file_name = f"gate{num_str}.js"
        file_path = os.path.join(LEVELS_DIR, file_name)

        code_hint = ensure_dashed_hint(lvl.get('codeHint', ''))
        code_hint_json = json.dumps(code_hint)
        
        # Escape string values for JS template literals
        title = json.dumps(lvl.get('title', f"GATE {num_str}"))
        sector = json.dumps(lvl.get('sector', f"GATE {num_str}"))
        learning_zone = json.dumps(lvl.get('learningZone', 'JavaScript Fundamentals'))
        description = json.dumps(lvl.get('story', ''))
        hints_json = json.dumps(lvl.get('hints', []), indent=2)
        initial_code = json.dumps(lvl.get('initialCode', ''))
        
        solution_json = json.dumps(lvl.get('solution', ''))
        
        validate_body = lvl.get('validateCode', 'return { success: true, message: "Gate cleared!" };')
        # Indent validate code
        indented_validate = '\n    '.join(validate_body.strip().split('\n'))

        content = f"""export const {var_name} = {{
  id: "{num_str}",
  sector: {sector},
  learningZone: {learning_zone},
  title: {title},
  description: {description},
  hints: {hints_json},
  codeHint: {code_hint_json},
  initialCode: {initial_code},
  solution: {solution_json},
  validate: (code, result, logs = []) => {{
    {indented_validate}
  }}
}};
"""
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(content)

        generated_files.append((var_name, file_name))
        print(f"Generated {file_name}")

    # Generate src/levels/index.js
    index_path = os.path.join(LEVELS_DIR, 'index.js')
    imports = '\n'.join([f"import {{ {var_name} }} from './{file_name}';" for var_name, file_name in generated_files])
    all_exports = ',\n  '.join([var_name for var_name, _ in generated_files])

    index_content = f"""{imports}

export const allLevels = [
  {all_exports}
];
"""
    with open(index_path, 'w', encoding='utf-8') as f:
        f.write(index_content)

    print(f"Generated {index_path} with {len(generated_files)} gates.")

if __name__ == '__main__':
    main()
