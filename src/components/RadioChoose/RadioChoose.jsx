import { useState } from 'react'

const ToggleRadioButtons = () => {
  const [selected, setSelected] = useState(null)

  const options = [
    { id: 1, label: 'Значение 1' },
    { id: 2, label: 'Значение 2' },
    { id: 3, label: 'Значение 3' },
  ]

  const handleClick = (id) => {
    setSelected((prev) => (prev === id ? null : id))
  }

  return (
    <div style={{ fontFamily: 'sans-serif', padding: '20px' }}>
      <h2>Результат:</h2>
      <div
        style={{
          padding: '10px',
          border: '1px solid #ccc',
          marginBottom: '20px',
          minHeight: '30px',
        }}
      >
        {options.find((opt) => opt.id === selected)?.label ||
          'Ничего не выбрано'}
      </div>

      <div style={{ display: 'flex', gap: '10px' }}>
        {options.map((opt) => (
          <button
            key={opt.id}
            onClick={() => handleClick(opt.id)}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              padding: '10px 15px',
              border: selected === opt.id ? '2px solid blue' : '1px solid #ccc',
              borderRadius: '4px',
              backgroundColor: selected === opt.id ? '#e0f0ff' : '#f9f9f9',
              color: 'black',
              cursor: 'pointer',
            }}
          >
            <input type="radio" checked={selected === opt.id} readOnly />
            {opt.label}
          </button>
        ))}
      </div>
    </div>
  )
}

export default ToggleRadioButtons
