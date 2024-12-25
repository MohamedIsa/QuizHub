
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Login from './components/login'
import SignUp from './components/signup'
import Navbar from './components/ui/Navbar'
import Footer from './components/ui/Footer'
import Dashboard from './components/dashboard'
import Home from './components/home'

function App() {

  return (
    
<>
    <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
      <Footer />
  
    </>
    
  )
}

export default App