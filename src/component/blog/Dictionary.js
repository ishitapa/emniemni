
import React, { useState, useEffect } from "react";

import Loader from "../Loader";
import DictionaryModal from "./DictionaryModal";


function Dictionary() {

  const [isLoader, setIsLoader] = useState(false);
  const [rec,setRec] = useState([]);
  const [ inputval1, setInputval1] = useState("");
  const [ closeModalState, setCloseModalState] = useState(false);
  


  const fetchData1 = async () =>{
   let inputval = inputval1;
   //console.log(inputval, inputval1);
    try {
      setIsLoader(true);
     const response = await fetch("https://api.dictionaryapi.dev/api/v2/entries/en/"+ inputval);
     if(response){
        const res = await response.json();
        if(res) { 
         // console.log("word", res);
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
  setCloseModalState(false)

 }
const closeModalHandler = (data) => {
  console.log("setCloseModalState", data)
  setCloseModalState(data);
  setInputval1("");
  setRec([]);
}

  return (
    <>
    <div className="dictionary">
    {isLoader ? <Loader/> : ""}  
          
              <span className="text1">Write the word you want to know so you can use it in your blog </span>
              <div className="inputBox"> 
              <input type="text" value={inputval1} 
                  onChange={wordValueHandler}
                  placeholder="Write a word"
              />
              <button onClick={wordValueSubmit}>Submit</button>    
          </div>
          {rec?.[0]?.word && (closeModalState === false) ? 
          
          <DictionaryModal
              //console.log(inputval, inputval1);
              dictionaryData = {rec}
              closeModal={(data)=>closeModalHandler(data)}
          />

          : rec?.title ?
          <h3>"We don't have that word in our Dictionary"</h3>
          : ""
          }
          
    </div>
    </>
  );
}

export default Dictionary;
