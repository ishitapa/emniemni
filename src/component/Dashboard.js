
import React, { useState, useEffect } from "react";

import Loader from "./Loader";
import temperature  from "../images/temperature.svg";
import droplet  from "../images/droplet.svg";
import wind  from "../images/wind.svg";
import Weather  from "./Weather";
import PollutionChart from "./PollutionChart"; 
import PollutionForecast from "./PollutionForecast"; 
import WeChart from "./WeChart"; 
import Blog from "./Blog";


function DashBoard() {

  const [dateTime, seDateTime] = useState();

  const toDate =(val)=>{
    seDateTime(val)
  }
  const [cityName, setCityName] = useState("");

  const [ inputval1, setInputval1] = useState("");


  const cityNameHandler =()=>{
    setCityName(inputval1);
  }
 
  const cityValueHandler = (e) =>{
    setInputval1(e.target.value);
   }
  const cityValueSubmit = (e) =>{
    //inputCity ( (inputval1 === "") ? "kolkata" : inputval1);
    setCityName( (inputval1 === "") ? "kolkata" : inputval1);
    // console.log("lllllllog",inputval1 ,cityName);
   }
  useEffect(() => {
    cityValueSubmit()
  },[])


  const theDate = new Date();
  const toDayDate = theDate.getDate();
  const todayMonth = theDate.getMonth() + 1;
  const toDayYear = theDate.getFullYear();
  const toDay = (toDayDate < 10 ? "0"+toDayDate : toDayDate ) + "." + (todayMonth < 10 ? "0"+todayMonth : todayMonth ) + "." +  toDayYear;
  
  const hourNow = theDate.getHours();
  const minNow = theDate.getMinutes();
  const timeNow =  (hourNow < 10 ? "0"+hourNow : hourNow ) + ":" +  (minNow < 10 ? "0"+minNow : minNow );
  return (
    <>
    <div className="wrap">
      <div className="wrap_full">
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
      </div>
      <div className="wrap_half">
       <Weather 
        //inputCity={(val) =>cityNameHandler(val)}
        cityNameToChart={cityName}
       />

      </div>  
      <div className="wrap_half">
        <PollutionChart
          cityNameToChart={cityName}
        />
        
      </div>  
      <div className="wrap_full">
        <WeChart cityNameToChart={cityName}/>
      </div>
    </div>
    
  
    </>
  );
}
 
export default DashBoard;
