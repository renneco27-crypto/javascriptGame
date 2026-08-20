import { useState, useEffect, useRef } from 'react'
import Confetti from 'react-confetti'
import { useWindowSize } from 'react-use'
import FloatingIDE from './components/FloatingIDE'
import StoryPanel from './components/StoryPanel'
import GameWorld from './components/GameWorld'
import LevelMenu from './components/LevelMenu'
import ExecutorWorker from './workers/executor.worker.js?worker'
import { allLevels as levels } from './levels/index.js'
import './App.css'

const songs = [
  '/music/alex-morgan-video-game-pixel-chiptune-music-583271.mp3',
  '/music/atlasaudio-game-game-music-576637.mp3',
  '/music/maksymmalko-roblox-minecraft-fortnite-video-game-music-358426.mp3',
  '/music/mondamusic-retro-arcade-game-music-512837.mp3',
  '/music/paulyudin-game-game-music-573991.mp3',
  '/music/the_mountain-game-game-music-508018.mp3'
];

function App() {
  const { width, height } = useWindowSize();
  const [currentLevelIndex, setCurrentLevelIndex] = useState(() => {
    return parseInt(localStorage.getItem('hackerGameProgress')) || 0;
  });
  const [output, setOutput] = useState([])
  const [resultStatus, setResultStatus] = useState(null)
  
  // Transition state
  const [transitionState, setTransitionState] = useState('swipe-in') // 'swipe-in', 'idle', 'swipe-out'
  
  const workerRef = useRef(null)
  const audioRef = useRef(null)

  const currentLevel = levels[currentLevelIndex] || levels[0];

  useEffect(() => {
    localStorage.setItem('hackerGameProgress', currentLevelIndex);
  }, [currentLevelIndex]);

  // Handle Music
  useEffect(() => {
    if (resultStatus?.success) {
      // Stop music when they succeed
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.currentTime = 0;
      }
    } else if (transitionState === 'idle') {
      // Start music when idle (and not succeeded yet)
      const randomSong = songs[Math.floor(Math.random() * songs.length)];
      if (audioRef.current) {
        audioRef.current.pause();
      }
      audioRef.current = new Audio(randomSong);
      audioRef.current.loop = true;
      audioRef.current.volume = 0.3; // keep it a bit quiet
      // We wrap in try-catch because browsers block auto-play until user interaction
      audioRef.current.play().catch(e => console.log('Audio autoplay blocked until interaction'));
    }

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
      }
    }
  }, [currentLevelIndex, resultStatus?.success, transitionState]);

  useEffect(() => {
    // If it just swiped in, clear transition state after animation finishes
    if (transitionState === 'swipe-in') {
      const timer = setTimeout(() => {
        setTransitionState('idle');
      }, 800);
      return () => clearTimeout(timer);
    }
  }, [transitionState]);

  useEffect(() => {
    workerRef.current = new ExecutorWorker()
    
    workerRef.current.onmessage = (e) => {
      const { success, result, logs, error, code } = e.data
      
      const finalLogs = [...logs];
      if (result !== undefined) {
        finalLogs.push(`Return: ${typeof result === 'object' ? JSON.stringify(result) : String(result)}`);
      }
      setOutput(finalLogs);
      
      if (success) {
        const validation = currentLevel.validate(code, result, logs);
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
  }, [currentLevelIndex])

  const handleRunCode = (code) => {
    // Attempt to resume audio context if it was paused due to autoplay policy
    if (audioRef.current && audioRef.current.paused && !resultStatus?.success) {
      audioRef.current.play().catch(e => console.log(e));
    }

    setOutput([])
    setResultStatus({ success: true, message: 'Executing...' })
    workerRef.current.postMessage(code)
  }

  const handleNextLevel = () => {
    if (currentLevelIndex < levels.length - 1) {
      // Trigger swipe out
      setTransitionState('swipe-out');
      
      // Wait for swipe out to finish, then advance level and swipe in
      setTimeout(() => {
        setCurrentLevelIndex(prev => prev + 1);
        setOutput([]);
        setResultStatus(null);
        setTransitionState('swipe-in');
      }, 500); // reduced from 800 for snappier animation
      
    } else {
      setResultStatus({ success: true, message: 'ALL LEVELS COMPLETED!' });
    }
  }

  const handleJumpLevel = (index) => {
    setTransitionState('swipe-out');
    setTimeout(() => {
      setCurrentLevelIndex(index);
      setOutput([]);
      setResultStatus(null);
      setTransitionState('swipe-in');
    }, 500);
  }

  return (
    <>
      <LevelMenu currentLevelIndex={currentLevelIndex} onSelectLevel={handleJumpLevel} />
      <GameWorld />
      
      {resultStatus?.success && currentLevelIndex < levels.length - 1 && (
        <Confetti
          width={width}
          height={height}
          recycle={true}
          numberOfPieces={200}
          gravity={0.15}
          style={{ zIndex: 100 }}
        />
      )}

      <div className={`game-ui-container ${transitionState}`}>
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
        <FloatingIDE 
          onRunCode={handleRunCode} 
          initialCode={currentLevel.initialCode} 
          codeHint={currentLevel.codeHint} 
        />
      </div>
    </>
  )
}

export default App
