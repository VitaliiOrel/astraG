import React, { useState, useEffect, useRef } from 'react'
import cStyles from './TypingTrainer.module.css'

const TypingTrainer = () => {
  const chars = 'abcdefghijklmnopqrstuvwxyz,.//;'
  const [currentChar, setCurrentChar] = useState('')
  const [log, setLog] = useState([])
  const [reactionTimes, setReactionTimes] = useState({})
  const [sessionTime, setSessionTime] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const [startTime, setStartTime] = useState(null)
  const timerRef = useRef(null)

  // Генерация случайного символа
  const getRandomChar = () => chars[Math.floor(Math.random() * chars.length)]

  // Инициализация нового символа
  const initNewChar = () => {
    setCurrentChar(getRandomChar())
    setStartTime(Date.now())
  }

  // Обработка нажатия клавиши
  const handleKeyPress = (e) => {
    if (isPaused) {
      setIsPaused(false)
      if (e.key === currentChar) {
        const reactionTime = Date.now() - startTime
        setLog((prev) => [...prev, { char: currentChar, time: reactionTime }])
        setReactionTimes((prev) => {
          const charTimes = prev[currentChar] || []
          return { ...prev, [currentChar]: [...charTimes, reactionTime] }
        })
        initNewChar()
      }
      return
    }
    if (e.key === currentChar) {
      const reactionTime = Date.now() - startTime
      setLog((prev) => [...prev, { char: currentChar, time: reactionTime }])
      setReactionTimes((prev) => {
        const charTimes = prev[currentChar] || []
        return { ...prev, [currentChar]: [...charTimes, reactionTime] }
      })
      initNewChar()
    }
  }

  // Таймер сессии
  useEffect(() => {
    if (!isPaused) {
      timerRef.current = setInterval(() => {
        setSessionTime((prev) => prev + 0.1)
      }, 100)
    }
    return () => clearInterval(timerRef.current)
  }, [isPaused])

  // Инициализация и обработка клавиш
  useEffect(() => {
    initNewChar() // Инициализация при монтировании
    document.addEventListener('keydown', handleKeyPress)
    return () => document.removeEventListener('keydown', handleKeyPress)
  }, [currentChar, isPaused]) // Зависимости только для обработки ввода

  // Сброс сессии
  const resetSession = () => {
    setCurrentChar('')
    setLog([])
    setReactionTimes({})
    setSessionTime(0)
    setIsPaused(false)
    setStartTime(null)
    clearInterval(timerRef.current)
    initNewChar()
  }

  // Форматирование времени в чч:мм:сс
  const formatTime = (time) => {
    const hours = Math.floor(time / 3600)
    const minutes = Math.floor((time % 3600) / 60)
    const seconds = Math.floor(time % 60)
    return `${hours.toString().padStart(2, '0')}:${minutes
      .toString()
      .padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`
  }

  // Вычисление статистики
  const avgReactionTime = log.length
    ? (log.reduce((sum, { time }) => sum + time, 0) / log.length).toFixed(2)
    : 0
  const minReactionTime = log.length
    ? Math.min(...log.map(({ time }) => time)).toFixed(2)
    : 0
  const maxReactionTime = log.length
    ? Math.max(...log.map(({ time }) => time)).toFixed(2)
    : 0
  const totalChars = log.length

  // Среднее время реакции по символам
  const sortedReactionTimes = Object.entries(reactionTimes)
    .map(([char, times]) => ({
      char,
      avgTime: (
        times.reduce((sum, time) => sum + time, 0) / times.length
      ).toFixed(2),
    }))
    .sort((a, b) => a.avgTime - b.avgTime)

  return (
    <div className={cStyles.container}>
      <div className={cStyles.header}>
        <span>Время сессии: {formatTime(sessionTime)}</span>
        <button
          onClick={() => setIsPaused(!isPaused)}
          className={cStyles.button}
        >
          {isPaused ? 'Продолжить' : 'Пауза'}
        </button>
        <button onClick={resetSession} className={cStyles.button}>
          Сброс
        </button>
      </div>
      <div className={cStyles.main}>
        <div className={cStyles.log}>
          <h2>Лог</h2>
          <div className={cStyles.logContent}>
            {log.map((entry, index) => (
              <p key={index}>
                Символ: {entry.char}, Время: {entry.time} мс
              </p>
            ))}
          </div>
        </div>
        <div className={cStyles.char}>{currentChar}</div>
        <div className={cStyles.stats}>
          <h2>Статистика</h2>
          {sortedReactionTimes.map(({ char, avgTime }, index) => (
            <p key={index}>
              {char}: {avgTime} мс
            </p>
          ))}
        </div>
      </div>
      <div className={cStyles.footer}>
        <p>Среднее время реакции: {avgReactionTime} мс</p>
        <p>Общее количество символов: {totalChars}</p>
        <p>Минимальная реакция: {minReactionTime} мс</p>
        <p>Максимальная реакция: {maxReactionTime} мс</p>
      </div>
    </div>
  )
}

export default TypingTrainer
