import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// Layout
import Layout from './components/Layout'

// Pages
import Home from './components/home/Home'
import PetInsurance from './components/petInsurance/PetInsurance'
import About from './components/about/About'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Home/>}/>
          <Route path='pet-insurance' element={<PetInsurance/>}/>
          <Route path="about" element={<About/>}/>
        </Route>
      </Routes>
    </Router>
  )
}

export default App
