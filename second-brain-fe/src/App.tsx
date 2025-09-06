
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Dashboard } from './pages/Dashboard'
import { Signup } from './pages/Signup'
import { Signin } from './pages/Signin'
import { HomePage } from './pages/Homepage'
import { Share } from './pages/Share'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />}></Route>
        <Route path='/signup' element={<Signup />}></Route>
        <Route path='/signin' element={<Signin />}></Route>
        <Route path='/dashboard' element={<Dashboard />}></Route>
        <Route path='/api/brain/:hash' element={<Share />}></Route>
      </Routes>
    </BrowserRouter>

  )
}

export default App
