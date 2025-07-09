import { Link } from 'react-router-dom'

const NavMenu = () => {
  return (
    <>
      <div>
        <Link to="/">Home -</Link>
        <Link to="/page1">- Page1</Link>
        <Link to="/makers">- Makers</Link>
        <Link to="/makers-css">- Makers CSS</Link>
        <Link to="/radiochoose">- Radio buttons</Link>
        <Link to="/typing-trainer">- Typing trainer</Link>
      </div>
    </>
  )
}

export default NavMenu
