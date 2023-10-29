// import logo from './logo.svg';
import Faq from './Faq';
import Login from './login';
import Home from './Home';
import AboutUs from './About';
import Form from './form';
import './App.css';
// import './Navbar.css';
import Navbar from './Navbar';
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import ProfileForm from './Profile';


function App() {
  return (
    <>
    <Routes>
      <Route path='/form' element={<Form />}/>
    <Route path="/faq" element={<Faq />}/>
    <Route path="/about" element={<AboutUs />}/>
    <Route path="/" element={<Home/>}/>
    <Route path='/login' element={<Login />}/>
    <Route path='/profile' element={<ProfileForm />}/>
    
    </Routes>   
    <Login/>
    </>
  );
}

export default App;