import React from 'react'
import Section1 from './components/Section1/Section1'
import Login from './pages/Login'
import SignUp from './pages/SignUp'
import SignUpArtist from './pages/SignUpArtist'
import { Routes, Route } from 'react-router-dom'
import ErrorPage from './pages/ErrorPage'
import LoginArtist from './pages/LoginArtist'
import ErrorArtist from './pages/ErrorArtist'

const App = () => {
  return (
    <div>
      {/* <Section1 /> */}
      <Routes>
        <Route path='/' element={<Section1 />} />
        <Route path='/login' element={<Login />} />
        <Route path='/loginartist' element={<LoginArtist />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/signupartist' element={<SignUpArtist />} />
        <Route path='/error' element={<ErrorPage />} />
        <Route path='/errorartist' element={<ErrorArtist />} />
      </Routes>
    </div>
  )
}

export default App