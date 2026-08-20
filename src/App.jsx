import { useState, useEffect, useRef } from 'react'
import FloatingIDE from './components/FloatingIDE'
import StoryPanel from './components/StoryPanel'
import GameWorld from './components/GameWorld'
import ExecutorWorker from './workers/executor.worker.js?worker'
import { levels } from './levels.js'
import './App.css'

function App() {
  const [currentLevelIndex, setCurrentLevelIndex] = useState(() => {
    return parseInt(localStorage.getItem('hackerGameProgress')) || 0;
  });
  const [output, setOutput] = useState([])
  const [resultStatus, setResultStatus] = useState(null)
  const workerRef = useRef(null)

  const currentLevel = levels[currentLevelIndex] || levels[0];

  useEffect(() => {
    localStorage.setItem('hackerGameProgress', currentLevelIndex);
  }, [currentLevelIndex]);

  useEffect(() => {
    // Initialize Web Worker for code execution
    workerRef.current = new ExecutorWorker()
    
    workerRef.current.onmessage = (e) => {
      const { success, result, logs, error, code } = e.data
      
      const finalLogs = [...logs];
      if (result !== undefined) {
        finalLogs.push(`Return: ${typeof result === 'object' ? JSON.stringify(result) : String(result)}`);
      }
      setOutput(finalLogs);
      
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
  }, [currentLevelIndex]) // Re-bind onmessage when level changes so currentLevel is updated in closure

  const handleRunCode = (code) => {
    setOutput([])
    setResultStatus({ success: true, message: 'Executing...' })
    workerRef.current.postMessage(code)
  }

  const handleNextLevel = () => {
    if (currentLevelIndex < levels.length - 1) {
      setCurrentLevelIndex(prev => prev + 1);
      setOutput([]);
      setResultStatus(null);
    } else {
      setResultStatus({ success: true, message: 'ALL LEVELS COMPLETED!' });
    }
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
        onNextLevel={handleNextLevel}
        isLastLevel={currentLevelIndex === levels.length - 1}
        sector={currentLevel.sector}
        learningZone={currentLevel.learningZone}
      />
      <FloatingIDE onRunCode={handleRunCode} initialCode={currentLevel.initialCode} />
    </>
  )
}

export default App
