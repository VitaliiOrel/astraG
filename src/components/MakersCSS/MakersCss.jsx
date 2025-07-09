import { useState } from 'react'
import cStyles from './MakersCssCommon.module.css'

function MakersCss() {
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

      {/* Контейнер списка */}
      {/* <div
        className={`${cStyles.list} ${
          selectedMakers.length ? cStyles.notEmpty : ''
        }`}
      > */}
      <div
        className={`${cStyles.list} ${
          selectedMakers.length === 0
            ? cStyles.listEmpty
            : selectedMakers.length === 1
            ? cStyles.list1
            : selectedMakers.length === 2
            ? cStyles.list2
            : selectedMakers.length === 3
            ? cStyles.list3
            : selectedMakers.length === 4
            ? cStyles.list4
            : selectedMakers.length === 5
            ? cStyles.list5
            : ''
        }`}
      >
        <div className={cStyles.listContent}>
          {selectedMakers.map((maker, index) => (
            <div key={index} className={cStyles.listItem}>
              {maker}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default MakersCss
