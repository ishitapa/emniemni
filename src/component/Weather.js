
import React, { useState, useEffect } from "react";

import Loader from "./Loader";
import temperature  from "../images/temperature.svg";
import droplet  from "../images/droplet.svg";
import wind  from "../images/wind.svg";
import cloud  from "../images/cloud.svg";


function Weather({inputCity,inputLon, inputLat}) {

  const [isLoader, setIsLoader] = useState(false);
  const [rec,setRec] = useState({});
  const [ inputval1, setInputval1] = useState("");
 
  
  const apik = "178bd8637e395d99fddf1bd1b7a2d3e0";


  const fetchData1 = async () =>{
    let inputval ="";
    if(inputval1 === ""){
      inputval = "kolkata"
    }else{
      inputval=inputval1
    }
    try {
      setIsLoader(true);
    
     const response = await fetch('https://api.openweathermap.org/data/2.5/weather?q='+inputval+'&appid='+apik);
     if(response){
        const res = await response.json();
        if(res) { 
         // console.log("new api",res);
         // console.log("inputval1",inputval1);
          setRec(res);
          return;
        }
      }
      }catch (e) {
    //  console.log(e.message);
    }finally{
      setIsLoader(false);
    }
  }
  
  
  useEffect(() => {
    cityValueSubmit(); 
   }, []);

const cityValueHandler = (e) =>{
 setInputval1(e.target.value);
}
const cityValueSubmit = (e) =>{
  fetchData1();
  inputCity ( (inputval1 === "") ? "kolkata" : inputval1);
 }

const theDate = new Date();
const toDayDate = theDate.getDate();
const todayMonth = theDate.getMonth() + 1;
const toDayYear = theDate.getFullYear();
const toDay = (toDayDate < 10 ? "0"+toDayDate : toDayDate ) + "." + (todayMonth < 10 ? "0"+todayMonth : todayMonth ) + "." +  toDayYear;

const hourNow = theDate.getHours();
const minNow = theDate.getMinutes();
const timeNow =  (hourNow < 10 ? "0"+hourNow : hourNow ) + ":" +  (minNow < 10 ? "0"+minNow : minNow );




   const [rec2,setRec2] = useState({});

   const fetchData3 = async () =>{
    
    try {
      setIsLoader(true);
    
    const response = await fetch('https://tile.openweathermap.org/map/clouds_new/1/1/1.png?appid='+apik);
     if(response){
        const res = await response.json();
        if(res) { 
          setRec2(res);
          console.log("pollution list api",rec2);
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
    fetchData3();  
   }, []);






  return (
    <>
    <div className="weather">
    {isLoader ? <Loader/> : ""}  

          <div className="chooseWeather">
            <div className="city">
                  <span>Choose a city for weather report </span>
                  <div className="selectedCountry">
                    <input type="text" value={inputval1} 
                      onChange={cityValueHandler}
                      placeholder="Write city name , showing Kolkata"
                     />
                     <button onClick={cityValueSubmit}>Submit</button>
                  </div>
            </div>   
            <div className="showTime">
              <span>{toDay}</span>
              {timeNow}
            </div>   
          </div>
          <div className="wrap">
            <div className="weather_box">
               <h3><span className="icon"><img src={temperature} alt=""/> </span> Temperature</h3>
               {rec?.main?.temp ?
               <div className="tempNow"> {(rec?.main?.temp - 273).toFixed(2) } <span className="deg">o</span>
               </div> : ""}
            </div>
            <div className="weather_box">
               <h3><span className="icon"><img src={droplet} alt=""/> </span> Humidity</h3>
               {rec?.main?.humidity != null ? <div className="tempNow"> {rec?.main?.humidity}  <span className="deg">%</span></div> : ""}
            </div>
          </div>
          <div className="wrap">
            <div className="weather_box">
               <h3><span className="icon"><img src={wind} alt=""/> </span> Wind</h3>
               {rec?.wind?.speed != null ? <div className="tempNow">{rec?.wind?.speed} <span className="deg">km/h</span></div> : ""}
            </div>
            <div className="weather_box">
               <h3><span className="icon"><img src={cloud} alt=""/> </span> Weather</h3>
               {rec?.clouds?.all != null ? <div className="tempNow">{rec?.weather?.[0].description} <span className="deg"></span></div> : ""}
            </div>
          </div>
          {/* <div className="weatherFooter">
             Weather application tool by Ishita Paul Roy
          </div> */}
        </div>
    </>
  );
}

export default Weather;
