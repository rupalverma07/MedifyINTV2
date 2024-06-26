import logo from './logo.svg';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.min.js';
import Header from './components/Header/Header';
import HomePage from './components/pages/HomePage/HomePage';
import HospitalDetails from './components/pages/HospitalDetails/HospitalDetails';
import { Route, Routes } from 'react-router-dom';
import MyBooking from './components/pages/MyBookingPage/MyBooking';

function App() {
  return (
    <>
    
    <Header />
    
    <Routes>
      <Route path='/'  element={<HomePage/>}/>
      <Route path='/hospitals'  element={<HospitalDetails/>}/>
      <Route path='/myBooking' element={<MyBooking />}/>
      
    </Routes>
      


   
    </>
  );
}

export default App;
