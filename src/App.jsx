import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import HomePage from './components/HomePage/HomePage'
import Page1 from './components/Page1/Page1'
import NavMenu from './components/NavMenu/NavMenu'
import Makers from './components/Makers/Makers'
import MakersCss from './components/MakersCSS/MakersCss'
import ToggleRadioButtons from './components/RadioChoose/RadioChoose'
import TypingTrainer from './components/TypingTrainer/TypingTrainer'

function App() {
  return (
    <>
      <BrowserRouter>
        <NavMenu />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/page1" element={<Page1 />} />
          <Route path="/makers" element={<Makers />} />
          <Route path="/makers-css" element={<MakersCss />} />
          <Route path="/radiochoose" element={<ToggleRadioButtons />} />
          <Route path="/typing-trainer" element={<TypingTrainer />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
