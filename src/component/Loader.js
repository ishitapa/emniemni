
import React, { useState, useEffect } from "react";


import temperature  from "../images/temperature.svg";
import droplet  from "../images/droplet.svg";
import wind  from "../images/wind.svg";


function Loader() {

  const [isLoader, setIsLoader] = useState(false);
  const [rec,setRec] = useState({});
  //const { latitude, longitude } = position.coords;
  
  



  return (
   <div className="loader"><img className="loaderImg" alt="" src={temperature}/></div>
  );
}

export default Loader;
