import { useState, useEffect, useRef } from 'react'
import FloatingIDE from './components/FloatingIDE'
import StoryPanel from './components/StoryPanel'
import GameWorld from './components/GameWorld'
import ExecutorWorker from './workers/executor.worker.js?worker'
import './App.css'

function App() {
  const [output, setOutput] = useState([])
  const [resultStatus, setResultStatus] = useState(null)
  const workerRef = useRef(null)

  useEffect(() => {
    // Initialize Web Worker for code execution
    workerRef.current = new ExecutorWorker()
    
    workerRef.current.onmessage = (e) => {
      const { success, result, logs, error } = e.data
      
      setOutput(logs)
      
      if (success) {
        // Here we could validate if the result matches the expected answer
        // For this mock level, we expect a variable 'celsius' or a specific math result
        setResultStatus({
          success: true,
          message: 'Execution Successful! ' + (result !== undefined ? `Result: ${result}` : '')
        })
      } else {
        setResultStatus({
          success: false,
          message: 'Error: ' + error
        })
      }
    }

    return () => {
      workerRef.current.terminate()
    }
  }, [])

  const handleRunCode = (code) => {
    setOutput([])
    setResultStatus({ success: true, message: 'Executing...' })
    workerRef.current.postMessage(code)
  }

  // Mock level data
  const currentLevel = {
    title: "LEVEL 01: TEMPERATURE ANOMALY",
    description: "The mainframe servers are overheating. We need to convert the raw Fahrenheit sensor data into Celsius to calibrate the cooling systems. Can you create a variable named 'celsius' that converts 100 degrees Fahrenheit to Celsius? (Formula: (F - 32) * 5/9)",
    hints: [
      "Use 'let' or 'const' to declare a variable.",
      "The formula is (100 - 32) * 5 / 9.",
      "Return the variable at the end so the system can verify it, e.g., 'return celsius;'"
    ]
  }

  return (
    <>
      <GameWorld />
      <StoryPanel 
        title={currentLevel.title}
        description={currentLevel.description}
        hints={currentLevel.hints}
        output={output}
        resultStatus={resultStatus}
      />
      <FloatingIDE onRunCode={handleRunCode} />
    </>
  )
}

export default App
