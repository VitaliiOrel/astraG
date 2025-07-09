import { useState } from 'react'
import cStyles from './MakersCommon.module.css'

function Makers() {
  const [inputValue, setInputValue] = useState('')
  const [selectedMakers, setSelectedMakers] = useState([])

  const handleInputChange = (e) => {
    setInputValue(e.target.value)
  }

  const handleAddClick = () => {
    if (inputValue.trim()) {
      setSelectedMakers([...selectedMakers, inputValue])
      setInputValue('')
    }
  }

  const handleRemoveLast = () => {
    setSelectedMakers(selectedMakers.slice(0, -1))
  }

  const handleClearAll = () => {
    setSelectedMakers([])
  }

  return (
    <div className={cStyles.container}>
      <div className={cStyles.inputGroup}>
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          className={cStyles.input}
          placeholder="Введите значение"
        />
        <button onClick={handleAddClick} className={cStyles.button}>
          Добавить
        </button>
        <button onClick={handleRemoveLast} className={cStyles.button}>
          Удалить
        </button>
        <button onClick={handleClearAll} className={cStyles.button}>
          Очистить
        </button>
      </div>
      <div className={cStyles.list}>
        {selectedMakers.map((maker, index) => (
          <div key={index} className={cStyles.listItem}>
            {maker}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Makers
