
import './App.css'
import HomePage from './components/Home/HomePage';
import Login from './components/LoginRegister/Login';
import NavBar from './components/NavBar/NavBar'
import { Routes, Route } from 'react-router-dom';

function App() {
  

  return (
    <>
      {/* <NavBar /> */}
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </>
  )
}

export default App
