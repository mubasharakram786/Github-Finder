import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Footer from './components/Layout/Footer'
import Navbar from './components/Layout/Navbar'
import './index.css'
function App() {
  return (
    <Router>
      <div className="flex flex-col justify-between h-screen	">
        <Navbar />
        <main className='container'>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}
export default App