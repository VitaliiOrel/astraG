import { Link } from 'react-router-dom'

const HomePage = () => {
  return (
    <>
      <h1>Test app. HomePage.</h1>
      <h2>Раздел дополнительных настроек</h2>
      <div>
        <Link to="/">Home -</Link>
      </div>
    </>
  )
}

export default HomePage
