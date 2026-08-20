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

  // Mock level data
  const currentLevel = {
    title: "LEVEL 01: TEMPERATURE ANOMALY",
    description: "The mainframe servers are overheating. We need to convert the raw Fahrenheit sensor data into Celsius to calibrate the cooling systems. Can you create a variable named 'celsius' that converts 100 degrees Fahrenheit to Celsius? (Formula: (F - 32) * 5/9)",
    hints: [
      "Use 'let' or 'const' to declare a variable.",
      "The formula is (100 - 32) * 5 / 9.",
      "Return the variable at the end so the system can verify it, e.g., 'return celsius;'"
    ],
    validate: (code, result) => {
      if (!code.includes('celsius')) {
        return { success: false, message: "Error: You need to declare a variable named 'celsius'." };
      }
      
      const expected = (100 - 32) * 5 / 9;
      if (result !== expected) {
        return { success: false, message: "Error: The calculation is incorrect, or you forgot to 'return celsius;' at the end." };
      }

      return { success: true, message: "MISSION ACCOMPLISHED: Temperature anomaly resolved." };
    }
  }

  useEffect(() => {
    // Initialize Web Worker for code execution
    workerRef.current = new ExecutorWorker()
    
    workerRef.current.onmessage = (e) => {
      const { success, result, logs, error, code } = e.data
      
      setOutput(logs)
      
      if (success) {
        const validation = currentLevel.validate(code, result);
        setResultStatus(validation);
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
