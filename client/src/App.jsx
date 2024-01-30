
import './App.css'
import ErrorPage from './components/ErrorPage/ErrorPage';
import HomePage from './components/Home/HomePage';
import Login from './components/LoginRegister/Login';
import Register from './components/LoginRegister/Register';
import NavBar from './components/NavBar/NavBar'
import { Routes, Route } from 'react-router-dom';

function App() {
  

  return (
    <div className='content'>
      <NavBar />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='*' element={<ErrorPage />} />
      </Routes>
    </div>
  )
}

export default App
