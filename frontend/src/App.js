import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Header from './components/Header/Header';
import About from './pages/About';
import Services from './pages/Services';
// import Career from './pages/Career';
import Contact from './pages/Contact';
import Login from './pages/Login';
import Footer from './components/Footer/Footer';
import Investment from './pages/Investment';

function App() {
  return (
   <>
   <Header/>
  <Routes>
    <Route path='/' element={<Home/>} />
    <Route path='/about' element={<About/>} />
    <Route path='/services' element={<Services/>} />
    {/* <Route path='/career' element={<Career/>} /> */}
    <Route path='/contact' element={<Contact/>} />
    <Route path='/login' element={<Login/>} />   
    <Route path='/investment' element={<Investment/>} />
    
  </Routes>

<Footer/> 

   </>
  );
}

export default App;
