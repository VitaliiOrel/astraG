import { useState } from 'react'
import styles from './TextAnalizer.module.css'

const stopWords = [
  'a',
  'an',
  'and',
  'are',
  'as',
  'at',
  'be',
  'by',
  'for',
  'from',
  'has',
  'he',
  'in',
  'is',
  'it',
  'its',
  'of',
  'on',
  'that',
  'the',
  'to',
  'was',
  'were',
  'will',
  'with',
]

const TextAnalizer = () => {
  const [wordFrequencies, setWordFrequencies] = useState([])
  const [error, setError] = useState('')
  const MAX_FILE_SIZE = 10 * 1024 * 1024 // 10 MB in bytes

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0]
    if (selectedFile) {
      if (selectedFile.size > MAX_FILE_SIZE) {
        setError('File is too large. Maximum size is 10 MB.')
        setWordFrequencies([])
        return
      }
      if (selectedFile.type !== 'text/plain') {
        setError('Please upload a .txt file.')
        setWordFrequencies([])
        return
      }
      setError('')
      processFile(selectedFile)
    }
  }

  const processFile = (file) => {
    const reader = new FileReader()
    reader.onload = (e) => {
      const text = e.target.result.toLowerCase()
      const words = text
        .replace(/[^a-z\s]/g, '') // Remove punctuation and non-letters
        .split(/\s+/)
        .filter((word) => word.length > 0 && !stopWords.includes(word)) // Filter empty words and stop words

      const frequencyMap = {}
      words.forEach((word) => {
        frequencyMap[word] = (frequencyMap[word] || 0) + 1
      })

      const frequencyArray = Object.entries(frequencyMap)
        .map(([word, count]) => ({ word, count }))
        .sort((a, b) => b.count - a.count || a.word.localeCompare(b.word)) // Sort by count desc, then alphabetically

      setWordFrequencies(frequencyArray)
    }
    reader.onerror = () => {
      setError('Error reading file.')
      setWordFrequencies([])
    }
    reader.readAsText(file)
  }

  return (
    <div className={styles.container}>
      <div className={styles.inputSection}>
        <h1>Word Frequency Analyzer</h1>
        <input
          type="file"
          accept=".txt"
          onChange={handleFileChange}
          className={styles.fileInput}
        />
        {error && <p className={styles.error}>{error}</p>}
      </div>
      <div>Unique: {wordFrequencies?.length}</div>
      {wordFrequencies.length > 0 && (
        <table className={styles.table}>
          <thead>
            <tr>
              <th>No</th>
              <th>Word</th>
              <th>Frequency</th>
            </tr>
          </thead>
          <tbody>
            {wordFrequencies.map((entry, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{entry.word}</td>
                <td>{entry.count}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  )
}

export default TextAnalizer
