import { useState } from 'react'
import cStyles from './Page1Common.module.css'

const Page1 = () => {
  const [selectedLanguage, setSelectedLanguage] = useState('en')
  const [duration, setDuration] = useState('0')
  const [currency, setCurrency] = useState('')
  const [price, setPrice] = useState()
  console.log('просто price: ', price)
  console.log('type of price: ', typeof price)
  console.log('number price: ', Number(price))

  const handleLanguageChange = (e) => {
    setSelectedLanguage(e.target.value)
  }

  // обработка ввода цены
  // ==================
  const handlePriceChange = (e) => {
    setPrice(e.target.value)
  }

  const handlePriceBlur = (e) => {
    let val = e.target.value
    if (val === '' || isNaN(val) || val == 0) {
      setPrice(parseFloat(0).toFixed(2))
      return
    }
    const value = parseFloat(val).toFixed(2)
    setPrice(value)
  }
  // ===================

  //обработка ввода длительности
  const handleDurationChange = (e) => {
    setDuration(e.target.value)
  }

  const handleDurationBlur = (e) => {
    const formattedValue = parseFloat(e.target.value).toFixed(0)
    setDuration(formattedValue)
  }

  return (
    <div className={cStyles.container}>
      <div className={cStyles.title}>
        <h1>Add service</h1>
      </div>
      <div className={cStyles.languageSet}>
        <span>Установите предпочтительный язык:</span>
        <label>
          <input
            type="radio"
            value="en"
            checked={selectedLanguage === 'en'}
            onChange={handleLanguageChange}
          />
          English
        </label>
        <label>
          <input
            type="radio"
            value="pl"
            checked={selectedLanguage === 'pl'}
            onChange={handleLanguageChange}
          />
          Polish
        </label>
        <label>
          <input
            type="radio"
            value="ua"
            checked={selectedLanguage === 'ua'}
            onChange={handleLanguageChange}
          />
          Ukrainian
        </label>
        <label>
          <input
            type="radio"
            value="ru"
            checked={selectedLanguage === 'ru'}
            onChange={handleLanguageChange}
          />
          Russian
        </label>
      </div>
      {/* блок общих данных */}
      <div className={cStyles.generalInfo}>
        <label className={cStyles.basicLabel}>
          Укажите длительность (мин):
          <input
            className={cStyles.basicInput}
            type="number"
            step="5"
            min="0"
            value={duration}
            onChange={handleDurationChange}
            onBlur={handleDurationBlur}
          />
        </label>
        <label className={cStyles.basicLabel}>
          Укажите цену:
          <input
            className={cStyles.basicInput}
            type="number"
            // step="0.01"
            min="0"
            value={price}
            onChange={handlePriceChange}
            onBlur={handlePriceBlur}
          />
        </label>
        <label className={cStyles.basicLabel}>
          Укажите название валюты:
          <input
            className={cStyles.basicInput}
            type="text"
            value={currency}
            onChange={(e) => setCurrency(e.target.value)}
          />
        </label>
      </div>
      <div className={cStyles.multiLanguageData}>Multi language data</div>
    </div>
  )
}

export default Page1
