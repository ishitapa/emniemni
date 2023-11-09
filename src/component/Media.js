
import React, { useState, useEffect } from "react";


// import temperature  from "../images/temperature.svg";
// import droplet  from "../images/droplet.svg";
// import wind  from "../images/wind.svg";


function Media(props) {

  // const [isLoader, setIsLoader] = useState(false);
  const [listBlogStore,setListBlogStore] = useState();
  
  const [blogVal, setBlogVal] = useState({
    title: "",
    author:"",
    content:""
  })  
  const [errorBlogVal, setErrorBlogVal] = useState({
    title: "",
    author:"",
    content:""
  }) 
  
  const [blogList, setBlogList] = useState([]) 

const blogHandler = (e) =>{
  const name = e.target.name;
  const val = e.target.value;

  const theDate = new Date();
  const toDayDate = theDate.getDate();
  const todayMonth = theDate.getMonth() + 1;
  const toDayYear = theDate.getFullYear();
  const toDay = (toDayDate < 10 ? "0"+toDayDate : toDayDate ) + "." + (todayMonth < 10 ? "0"+todayMonth : todayMonth ) + "." +  toDayYear;

  const hourNow = theDate.getHours();
  const minNow = theDate.getMinutes();
  const timeNow =  (hourNow < 10 ? "0"+hourNow : hourNow ) + ":" +  (minNow < 10 ? "0"+minNow : minNow );

  setBlogVal({
    ...blogVal,
    [name] : val,
    date: toDay +" ," + timeNow

  })
 

  if(name === "title" && val.length === 0 ){
    setErrorBlogVal({ ...errorBlogVal, title :"Write a title for your blog"})
  } else if(name === "title" && val.length !== 0 ) {
    setErrorBlogVal({...errorBlogVal,title: ""})
  }else if(name === "author" && val.length === 0){
    setErrorBlogVal({...errorBlogVal,  author :"Write your name for your blog" })
  }  else if(name === "author" && val.length !== 0){
    setErrorBlogVal({...errorBlogVal, author: ""})
  }else if(name === "content" && val.length === 0 ){
    setErrorBlogVal({...errorBlogVal,  content :"Write content for your blog"})
  } else if(name === "content" && val.length !== 0 ){
    setErrorBlogVal({...errorBlogVal, content:"" }) 
  };
 }
const BlogSubmit = (e) =>{

  blogList.push(blogVal);

  localStorage.setItem('blog_list', JSON.stringify(blogList));
  setListBlogStore(JSON.parse(localStorage.getItem('blog_list')));

  setBlogVal({
    title: "",
    author:"",
    content:"",
    date: ""
  });
  setErrorBlogVal({
    title: "",
    author:"",
    content:""
  })
  
  console.log("blogVal",blogVal,"blogList", blogList, "from storage", listBlogStore);
}

useEffect(() => {
  setListBlogStore(JSON.parse(localStorage.getItem('blog_list')));
 }, []);


  return (
   <>
   <div className="wrap">
      <div className="wrap_half2">
        <h3 className="blog_header">Media</h3>
       
      </div>  
   </div>  
   </>
  );
}

export default Media;
