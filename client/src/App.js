import {Routes, Route} from 'react-router-dom'
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import Contact from './pages/Contact';
import Policy from './pages/Policy';
import Pagenotfound from './pages/Pagenotfound';
import Register from './pages/Auth/Register';
import Login from './pages/Auth/Login';

function App() {
  return <>
  <Routes>
    <Route path='/' element={<HomePage/>} />
    <Route path='/about' element={<AboutPage/>} />
    <Route path='/contact' element={<Contact/>} />
    <Route path='/policy' element={<Policy/>} />
    <Route path='*' element={<Pagenotfound/>} />
    <Route path='/register' element={<Register/>} />
    <Route path='/login' element={<Login/>} />
  </Routes>
  
  </>;
}

export default App;
