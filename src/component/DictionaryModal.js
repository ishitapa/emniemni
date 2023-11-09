
import React, { useState, useEffect } from "react";

import Loader from "./Loader";
import temperature  from "../images/temperature.svg";
import droplet  from "../images/droplet.svg";
import wind  from "../images/wind.svg";
import cloud  from "../images/cloud.svg";


function DictionaryModal(props) {

  //const [isLoader, setIsLoader] = useState(false);
  //const [ inputval1, setInputval1] = useState("");
  


  




  return (
    <>
      <div className="modalBg">
         <button className="cross" onClick={() => props.closeModal(true)}>X</button>

        <div className="wordDetails">

            <h2 className="mainWord">
              {props.dictionaryData?.[0]?.word}
              <span className="pronan">
              {props.dictionaryData?.[0]?.phonetics?.[1]?.text}
              </span>
            </h2>
            <div className="deff">
              {
                props.dictionaryData?.[0]?.meanings.map((elm,key) => {
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
        </div>  
    </>
  );
}

export default DictionaryModal;
