import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import './Hospital.css'
import MedicalCard from '../../MedicalCard/MedicalCard';
import Navbar from '../../Navbar/Navbar'
import sensodyne from '../../../assets/sensodyne_dweb.png.png';
import locationIcon from '../../../assets/Icon (4).png'
import Faq from '../../Faq/Faq';
import Footer from '../../Footer/Footer';

const HospitalDetails = () => {
  const[medicalCenters, setMedicalCenters] = useState([])
  const location = useLocation();
  const hospitalData = location.state;
  const totalMedical = hospitalData.length;
  const stateName = hospitalData[0].State
  console.log(hospitalData)
  useEffect(() =>{
    setMedicalCenters(hospitalData)
  },[hospitalData])
  return (
    <div>
      <div> <Navbar type="detail"/></div>
      <div className='headerBar'>
        <div className='container barContainer'>
        <div className='searchBox2'>
        <div className='searchField2'>
          <img src={locationIcon} alt="search icon" className='sIcon2'/>
          <select  className='dropdown2'>
            <option value='' disabled>State</option>
            {/* {stateList.map(item => <option value={item}>{item}</option>)} */}
          </select>
        </div>
        <div className='searchField'>
        <img src={locationIcon} alt="search icon" className='sIcon2'/>
          <select className='dropdown3'>
            <option value='' disabled>City</option>
            {/* {cityList.map(item => <option value={item}>{item}</option>)} */}
          </select>
          </div>
          <div>
            <button  className='searchBtn2'>Search</button>
          </div>
          <div>
          
          </div>
      </div>
        </div>
      </div>
<div className='container mainContent'>
    <h2 className='headerText'>{totalMedical} medical centers available in {stateName}</h2>
    <div className='row'>
    <div className='col-8'>
      {medicalCenters.length>0 ? (medicalCenters.map(item => <MedicalCard data={item} />)) : ('No Data Available')}
    </div>
    <div className='col-4'>
      <div className='card'>
      <img src={sensodyne} alt='sensodyne'/>
      </div>
      
    </div>
    </div>
</div>
<Faq />
<Footer />
    </div>
  )
}

export default HospitalDetails
