
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
  const [cityLat, setCityLat] = useState("");
  const [cityLon, setCityLon] = useState("");

  const cityNameHandler =(val)=>{
    setCityName(val);
    //console.log("city", cityName);

  }
  // const cityLatHandler =(val)=>{
  //   setCityLat(val);
  //   //console.log("city", cityName);

  // }
  // const cityLonHandler =(val)=>{
  //   setCityLon(val);
  //   //console.log("city", cityName);

  // }
  return (
    <>
    <div className="wrap">
      <div className="wrap_half">
       <Weather 
       inputCity={(val) =>cityNameHandler(val)}
       />
       
       <WeChart cityNameToChart={cityName}/>

      </div>  
      <div className="wrap_half">
        <PollutionChart
          cityNameToChart={cityName}
        />
        <PollutionForecast
          cityNameToChart={cityName}
        />
      </div>  
      
    </div>
    
  
    </>
  );
}
 
export default DashBoard;
