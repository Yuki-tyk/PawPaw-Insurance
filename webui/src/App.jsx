// Bootstrap
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css'

// Layout
import Layout from './pages/Layout'

// Pages
import Home from './pages/home/Home'
import PetInsurance from './pages/petInsurance/PetInsurance'
import About from './pages/about/About'

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
