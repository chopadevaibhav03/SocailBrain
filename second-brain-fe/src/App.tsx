
// import './App.css'
// import { BrowserRouter, Routes, Route } from 'react-router-dom'
// import { Dashboard } from './pages/Dashboard'
// import { Signup } from './pages/Signup'
// import { Signin } from './pages/Signin'
// import { HomePage } from './pages/Homepage'
// import { Share } from './pages/Share'

// import { Navigate } from "react-router-dom";

// function PrivateRoute({ children }: { children: JSX.Element }) {
//   const username = localStorage.getItem("username");
//   return username ? children : <Navigate to="/signin" replace />;
// }


// function App() {

//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path='/' element={<HomePage />}></Route>
//         <Route path='/signup' element={<Signup />}></Route>
//         <Route path='/signin' element={<Signin />}></Route>
//         <Route path='/dashboard' element={<Dashboard />}></Route>
//         <Route path='/api/brain/:hash' element={<Share />}></Route>
//         <Route path="/dashboard" element={<PrivateRoute><Dashboard /></PrivateRoute>} />
//       </Routes>
//     </BrowserRouter>

//   )
// }

// export default App

import './App.css'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { Dashboard } from './pages/Dashboard'
import { Signup } from './pages/Signup'
import { Signin } from './pages/Signin'
import { HomePage } from './pages/Homepage'
import { Share } from './pages/Share'

function PrivateRoute({ children }: { children: JSX.Element }) {
  const username = localStorage.getItem("username");
  return username ? children : <Navigate to="/signin" replace />;
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/signin' element={<Signin />} />
        <Route path='/dashboard' element={<PrivateRoute><Dashboard /></PrivateRoute>} />
        <Route path='/api/brain/:hash' element={<Share />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
