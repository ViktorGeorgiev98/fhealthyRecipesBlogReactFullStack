
import './App.css'
import ErrorPage from './components/ErrorPage/ErrorPage';
import HomePage from './components/Home/HomePage';
import Login from './components/LoginRegister/Login';
import Register from './components/LoginRegister/Register';
import NavBar from './components/NavBar/NavBar'
import { Routes, Route } from 'react-router-dom';
import { ErrorHandler } from './context/ErrorHandler';
import { CookiesHandler } from './context/CookiesContext';

function App() {
  

  return (
    <div className='content'>
      <CookiesHandler>
        <ErrorHandler>
          <NavBar />
            <Routes>
              <Route path='/' element={<HomePage />} />
              <Route path='/login' element={<Login />} />
              <Route path='/register' element={<Register />} />
              <Route path='*' element={<ErrorPage />} />
            </Routes>
        </ErrorHandler>
      </CookiesHandler>
    </div>
  )
}

export default App
