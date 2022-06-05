import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { GithubProvider } from './context/github/GithubContext'
import Home from './pages/Home'
import About from './pages/About'
import Footer from './components/Layout/Footer'
import Navbar from './components/Layout/Navbar'
import NotFound from './components/Layout/NotFound'
import User from './components/Layout/User'
import './index.css'
import { AlertProvider } from './context/alert/AlertContext'
import Alert from './components/Layout/Alert'
function App() {
  return (
    <GithubProvider>
      <AlertProvider>
        <Router>
          <div className="flex flex-col justify-between h-screen	">
            <Navbar />
            <main className='container mx-auto'>
              <Alert/>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/user/:login" element={<User />} />
                <Route path="/notfound" element={<NotFound />} />
                <Route path="/*" element={<NotFound />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </Router>
      </AlertProvider>
    </GithubProvider>
  )
}
export default App