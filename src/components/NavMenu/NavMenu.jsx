import { Link } from 'react-router-dom'

const NavMenu = () => {
  return (
    <>
      <div>
        <Link to="/">Home -</Link>
        <Link to="/page1">- Page1</Link>
      </div>
    </>
  )
}

export default NavMenu
