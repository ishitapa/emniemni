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

import Loader from "../Loader";


function WeChart({cityNameToChart}) {

  const [dateTime, seDateTime] = useState();
  const apik = "178bd8637e395d99fddf1bd1b7a2d3e0";
  const [rec,setRec] = useState({});
  const [isLoader, setIsLoader] = useState(false);


//console.log("cityNameToChart",cityNameToChart);
const fetchData2 = async () =>{
    let inputval ="";
    if(cityNameToChart === ""){
      inputval = "kolkata"
    }else{
      inputval = cityNameToChart
    }
   
    try {
      setIsLoader(true);
    
     const response = await fetch('http://api.openweathermap.org/data/2.5/forecast?q='+inputval+'&appid='+apik);
     if(response){
        const res = await response.json();
        if(res) { 
        //console.log("new api",res);
         // console.log("inputval1",inputval1);
          setRec(res);
          return;
        }
      }
      }catch (e) {
      console.log(e.message);
    }finally{
      setIsLoader(false);
      //inputCity ( (inputval1 === "") ? "kolkata" : inputval1)
      
    }
  }

  useEffect(() => {
    fetchData2();  
   }, [cityNameToChart]);
  
   
   const temp = [];
   const tempTime = [];
   const tempTimeSort = [];

   ChartJS.register(
     CategoryScale,
     LinearScale,
     PointElement,
     LineElement,
     Title,
     Tooltip,
     Legend
   );
   
    const options = {
     responsive: true,
     plugins: {
       legend: {
        // position: 'top' as const,
       },
       title: {
         display: false,
         text: 'Chart.js Line Chart',
       },
     },
   };

   for (let index = 0; index < rec?.list?.length; index++) {
    //(elem?
    temp.push((rec?.list[index].main?.temp - 273).toFixed(2))
    tempTime.push(rec?.list[index]?.dt_txt?.substring(11, 13) + " o'clock");
   }
   const labels = tempTime;

    const data = {
     labels,
     datasets: [
       {
         label: 'Temperature in Degree',
         //data: labels.map(() => faker.number.int({ min: 0, max: 60 })),
         data: temp,
         borderColor: 'rgb(255, 99, 132)',
         backgroundColor: 'rgba(255, 99, 132, 0.5)',
       }
     ],
   };





  return (
    <>
    <div className="chartWeather mt-40">
      {isLoader ? <Loader/> : ""}  
      <h3 className="blog_header"> 
      Temperature Chart of 48hr of <span className="capCase">{cityNameToChart}   </span>
        <span className="subtitle">(starting from today)</span>
      </h3>
      <div className="chart">
         <Line options={options} data={data} />
      </div>
    </div>
    </>
  );
}
 
export default WeChart;
