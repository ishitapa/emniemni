
import React, { useState, useEffect } from "react";

import Loader from "./Loader";
import temperature  from "../images/temperature.svg";
import droplet  from "../images/droplet.svg";
import wind  from "../images/wind.svg";
import cloud  from "../images/cloud.svg";


function Dictionary() {

  const [isLoader, setIsLoader] = useState(false);
  const [rec,setRec] = useState([]);
  const [ inputval1, setInputval1] = useState("");
  


  const fetchData1 = async () =>{
   let inputval = inputval1;
   console.log(inputval, inputval1);
    try {
      setIsLoader(true);
     const response = await fetch("https://api.dictionaryapi.dev/api/v2/entries/en/"+ inputval);
     if(response){
        const res = await response.json();
        if(res) { 
          console.log("word", res);
          setRec(res);
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
    wordValueSubmit(); 

   }, []);

const wordValueHandler = (e) =>{
 setInputval1(e.target.value);
}
const wordValueSubmit = (e) =>{
  fetchData1();

 }


  return (
    <>
    {isLoader ? <Loader/> : ""}  
    <div className="dictionary">
          
              <span className="text1">Write the word you want to know about </span>
              <div className="inputBox"> 
              <input type="text" value={inputval1} 
                  onChange={wordValueHandler}
                  placeholder="Write a word"
              />
              <button onClick={wordValueSubmit}>Submit</button>    
          </div>
          {rec?.[0]?.word ? 
          
          <div className="wordDetails">
            <h2 className="mainWord">
              {rec?.[0]?.word}
              <span className="pronan">
              {rec?.[0]?.phonetics?.[1]?.text}
              </span>
            </h2>
            <div className="deff">
              {
                rec?.[0]?.meanings.map((elm,key) => {
                  return (
                    <>
                      <h3 key={key}>{elm?.partOfSpeech}</h3>
                      
                      <ul>{elm?.definitions.map((elem, key) => {
                      
                        return(
                            <li className="deffList">
                              <p key={key}><span>{key+1 + ") "}</span>{elem?.definition}</p> 
                              {elem?.example && <div>-  {elem?.example} "</div> }
                            </li>   
                        )}
                          
                      )}
                      </ul>
                  </>
                  )}
                )
              }
                        
            </div>
          </div>
          : rec?.title ?
          "We don't have that word in our Dictionary"
          : ""
          }
          
    </div>
    </>
  );
}

export default Dictionary;
