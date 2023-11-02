
import React, { useState, useEffect } from "react";

import Loader from "./Loader";
import temperature  from "../images/temperature.svg";
import droplet  from "../images/droplet.svg";
import wind  from "../images/wind.svg";
import Weather  from "./Weather";
import Dictionary from "./Dictionary"; 
import Blog from "./Blog";


function DashBoard(props) {

  const [dateTime, seDateTime] = useState();
  const toDate =(val)=>{
    seDateTime(val)
  }

  console.log("date", dateTime);

  return (
    <>
    <div className="wrap">
      <div className="wrap_half">
       <Weather 
       //totalDateTime={toDate}
       />
      </div>  
      <div className="wrap_half">
        <Dictionary/>
      </div>  
      
    </div>
    <div className="wrap">
      <Blog 
      //today={dateTime}
      />
    </div>
    </>
  );
}

export default DashBoard;
