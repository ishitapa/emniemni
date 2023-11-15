import React, { useState, useEffect } from "react";


import Loader from "./Loader";
import temperature  from "../images/temperature.svg";
import droplet  from "../images/droplet.svg";
import wind  from "../images/wind.svg";
import Weather  from "./Weather";
import Dictionary from "./Dictionary"; 
import Blog from "./Blog";
//import pollution from "../images/pollu.jpg";


function PollutionChart({cityNameToChart}) {

  const apik = "178bd8637e395d99fddf1bd1b7a2d3e0";
  const [rec,setRec] = useState({});
  const [rec1,setRec1] = useState({});
  const [isLoader, setIsLoader] = useState(false);

  const fetchData1 = async () =>{
    let inputval ="";
    if(cityNameToChart === ""){
      inputval = "kolkata"
    }else{
      inputval=cityNameToChart
    }
    try {
      setIsLoader(true);
    
     const response = await fetch('https://api.openweathermap.org/data/2.5/weather?q='+inputval+'&appid='+apik);
     if(response){
        const res = await response.json();
        if(res) { 
          setRec1(res);
          return;
        }
      }
      }catch (e) {
    //  console.log(e.message);
    }finally{
      setIsLoader(false);
    }
  }



const fetchData2 = async () =>{
    let inputLat ="";
    let inputLon ="";
    if(cityNameToChart === ""){
      inputLat = "22.5697"
    }else{
      inputLat = rec1?.coord?.lat
    }
    if(cityNameToChart === ""){
      inputLon = "88.3697"
    }else{
      inputLon = rec1?.coord?.lon
    }
    try {
      setIsLoader(true);
    
     const response = await fetch('http://api.openweathermap.org/data/2.5/air_pollution?lat='+inputLat+'&lon='+inputLon+'&appid='+apik);
     if(response){
        const res = await response.json();
        if(res) { 
          setRec(res);
          //console.log("new api",rec);
          return;
        }
      }
      }catch (e) {
      //console.log(e.message);
    }finally{
      setIsLoader(false);
    }
  }

  useEffect(() => {
    fetchData1();  
  
   }, [cityNameToChart]);

   useEffect(() => {
    fetchData2();  
   }, [rec1?.coord?.lat, rec1?.coord?.lon,rec1?.list?.main?.aqi]);
 




  return (
    <>
    <div className="chartWeather">
      {isLoader ? <Loader/> : ""}  
      <div className="chooseWeather left">Pollution of  <span className="capCase"> { cityNameToChart } </span> is &nbsp;  
      <span 
        className={
          rec?.list?.[0]?.main?.aqi === 1 ? "good" :
        rec?.list?.[0]?.main?.aqi === 2 ? "con fair" :
        rec?.list?.[0]?.main?.aqi === 3 ? "moderate" :
        rec?.list?.[0]?.main?.aqi === 4 ? "poor" :
        rec?.list?.[0]?.main?.aqi === 5 ?"vPoor" :""
        }
      >{ 
        rec?.list?.[0]?.main?.aqi === 1 ? " Good" :
        rec?.list?.[0]?.main?.aqi === 2 ? " Fair" :
        rec?.list?.[0]?.main?.aqi === 3 ? " Moderate" :
        rec?.list?.[0]?.main?.aqi === 4 ? " Poor" :
        rec?.list?.[0]?.main?.aqi === 5 ? " Very Poor" : ""

      }</span>
      </div>
      <div className="chart pollution">
         
          <ul>
              
              
              <li> 
                <h3>co</h3> 
                <p>{rec?.list?.[0]?.components?.co}μg/m3</p>
              </li>
              <li> 
                <h3>nh3</h3> 
                <p>{rec?.list?.[0]?.components?.nh3}μg/m3</p>
              </li>
              <li> 
                <h3>no</h3> 
                <p>{rec?.list?.[0]?.components?.no}μg/m3</p>
              </li>
              <li> 
                <h3>no2</h3> 
                <p>{rec?.list?.[0]?.components?.no2}μg/m3</p>
              </li>
              <li> 
                <h3>o3</h3> 
                <p>{rec?.list?.[0]?.components?.o3}μg/m3</p>
              </li>
              <li> 
                <h3>pm2_5</h3> 
                <p>{rec?.list?.[0]?.components?.pm2_5}μg/m3</p>
              </li>
              <li> 
                <h3>pm10</h3> 
                <p>{rec?.list?.[0]?.components?.pm10}μg/m3</p>
              </li>
              <li> 
                <h3>so2</h3> 
                <p>{rec?.list?.[0]?.components?.so2}μg/m3</p>
              </li>
          </ul>
      </div>
    </div>
    </>
  );
}
 
export default PollutionChart;
