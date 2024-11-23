import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Project from './pages/Project'
import Contact from './pages/Contact'
import Blog from './pages/Blog'

function App() {

  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/projects' element={<Project />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/blog' element={<Blog />} />
        </Routes>
        <Footer />
      </Router>
    </>
  )
}

export default App
