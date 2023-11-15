import React, { useState, useEffect } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
// import faker from 'faker';
import { faker } from '@faker-js/faker';

import Loader from "./Loader";
import temperature  from "../images/temperature.svg";
import droplet  from "../images/droplet.svg";
import wind  from "../images/wind.svg";
import Weather  from "./Weather";
import Dictionary from "./Dictionary"; 
import Blog from "./Blog";
//import pollution from "../images/pollu.jpg";


function PollutionForecast({cityNameToChart}) {

  const apik = "178bd8637e395d99fddf1bd1b7a2d3e0";
  const [isLoader, setIsLoader] = useState(false);
  const [rec,setRec] = useState({});
  const [rec1,setRec1] = useState({});
  

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
  };


  
   

  






  //  const temp = [];
  //  const tempTime = [];

  //  ChartJS.register(
  //    CategoryScale,
  //    LinearScale,
  //    PointElement,
  //    LineElement,
  //    Title,
  //    Tooltip,
  //    Legend
  //  );
   
  //   const options = {
  //    responsive: true,
  //    plugins: {
  //      legend: {
  //       // position: 'top' as const,
  //      },
  //      title: {
  //        display: false,
  //        text: 'Chart.js Line Chart',
  //      },
  //    },
  //  };

  //  for (let index = 0; index < rec?.list?.length; index++) {
  //   //(elem?
  //   temp.push((rec?.list[index].main?.temp - 273).toFixed(2))
  //   tempTime.push(rec?.list[index]?.dt_txt?.substring(11, 13) + " o'clock");
  //  }
  //  //tempTimeSort = tempTime.length> 12 ? tempTime.slice(0,12) : [];

  //  //console.log("temp",temp, "tempTime",tempTime);
  //  const labels = tempTime;

  //   const data = {
  //    labels,
  //    datasets: [
  //      {
  //        label: 'Temperature in Degree',
  //        //data: labels.map(() => faker.number.int({ min: 0, max: 60 })),
  //        data: temp,
  //        borderColor: 'rgb(255, 99, 132)',
  //        backgroundColor: 'rgba(255, 99, 132, 0.5)',
  //      }
  //    ],
  //  };





  return (
    <>
    <div className="chartWeather mt-40">
      {isLoader ? <Loader/> : ""}  
    
      <div className="chart">
       
          
      </div>
    </div>
    </>
  );
}
 
export default PollutionForecast;
