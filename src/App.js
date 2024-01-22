import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import { useState } from 'react';


function App() {
  var [weather, setweather] = useState("")
  var [temp,settemp]=useState("")
  var [cond,setcond]=useState("")
  var [desc,setdesc]=useState("")
  function getweather(e) {
    setweather(e.target.value)
    console.log(weather);
  }
  
  function updateweather() {
    var data = axios(`https://api.openweathermap.org/data/2.5/weather?q=${weather}&appid=619821b683b3263e14bcad256e949e0e`)
    data.then(function(info){
      setcond(info.data.weather[0].main)
      setdesc(info.data.weather[0].description)
      settemp(info.data.main.temp)
    })
  }

  return (
    <>
      <div className='bg-black p-10'>
        <div className='bg-green-400 p-5'>
          <h1 className='font-bold text-2xl'>Weather Report</h1>
          <p>I can give you a weather report about Your city!</p>
          <input type="text" placeholder='Enter Your City Name' onChange={getweather} value={weather} className=' border border-black mt-3 rounded-sm' /> <br />
          <button className='bg-black text-white p-1 mt-3 rounded-md' onClick={updateweather}>Get Report</button>
          <p><b>Weather:</b>{cond}</p>
          <p><b>Temperature:</b>{temp}</p>
          <p><b>Description:</b>{desc}</p>
        </div>
      </div>
    </>
  );
}

export default App;
