// Bootstrap
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css'

// Layout
import Layout from './pages/Layout'

// Pages
import PetInsurance from './pages/petInsurance/PetInsurance'
import AboutUs from './pages/aboutUs/AboutUs'
import ContactUs from './pages/contactUs/ContactUs'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<PetInsurance />}/>
          <Route path="about-us" element={<AboutUs />}/>
          <Route path='contact-us' element={<ContactUs />}/>
        </Route>
      </Routes>
    </Router>
  )
}

export default App
