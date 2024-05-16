import React, { useEffect, useState } from 'react'
import searchIcon from '../../assets/searchicon.png'

const Search = () => {
  const[stateList, setStateList] = useState([]);
  const[cityList, setCityList] = useState([]);
  const[selectedState, setSelectedState] = useState('')
  const[selectedCity, setSelectedCity] = useState('')
  const[hospitalData, setHospitalData] = useState([])

  const getStateList = async() =>{
    const res = await fetch('https://meddata-backend.onrender.com/states')
    const data = await res.json();
console.log(data)
    setStateList(data)
  }
const getCitiesList = async(stateName) =>{
  const res = await fetch(`https://meddata-backend.onrender.com/cities/${stateName}`)
  const data = await res.json();
console.log(data)
  setCityList(data)
}
  const stateHandler = (e) =>{
    let dropdownValue =e.target.value 
    setSelectedState(dropdownValue)
    getCitiesList(dropdownValue)
  }
const cityHandler = (e) =>{
  setSelectedCity(e.target.value)
}
const getHospitalData = async() =>{
  const res = await fetch(`https://meddata-backend.onrender.com/data?state=${selectedState}&city=${selectedCity}`)
  const data = await res.json()
  console.log(data)
}
  useEffect(()=>{
      getStateList()
  },[])

  return (
    <div className='searchContainer'>
      <div className='searchBox'>
        <div className='searchField'>
          <img src={searchIcon} alt="search icon" className='sIcon'/>
          <select value={selectedState} onChange={stateHandler}>
            <option value='' disabled>State</option>
            {stateList.map(item => <option value={item}>{item}</option>)}
          </select>
        </div>
        <div className='searchField'>
        <img src={searchIcon} alt="search icon" className='sIcon'/>
          <select value={selectedCity} onChange={cityHandler}>
            <option value='' disabled>City</option>
            {cityList.map(item => <option value={item}>{item}</option>)}
          </select>
          </div>
          <div>
            <button onClick={getHospitalData}>Search</button>
          </div>
          <div>
          
          </div>
      </div>
    </div>
  )
}

export default Search
