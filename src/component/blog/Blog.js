
import React, { useState, useEffect } from "react";


import Dictionary from "./Dictionary"; 


function Blog(props) {

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
        <h3 className="blog_header">Write Content For your blog</h3>
        <div className="createBlog">
          <input type="text" placeholder="Write your Blog title"
            value={blogVal.title}
            name="title"
            onChange={blogHandler}
          />
          {errorBlogVal.title && <div className="error">{errorBlogVal.title}</div>}

          <input type="text" placeholder="Name of the Author"
            value={blogVal.author}
            name="author"
            onChange={blogHandler}
          />
          {errorBlogVal.author && <div className="error">{errorBlogVal.author}</div>}

          <textarea placeholder="Write your Blog content"
           value={blogVal.content}
           name="content"
           onChange={blogHandler}
          ></textarea>
          {errorBlogVal.content && <div className="error">{errorBlogVal.content}</div>}

          <button type="submit"
           disabled={(blogVal.title.length===0 || blogVal.author.length===0 || blogVal.content.length===0) ? 
            "disabled" : ""}
           onClick={BlogSubmit}
          >Save</button>
        </div>

         <Dictionary/>
      </div>  
      <div className="wrap_half2">
         <h3 className="blog_header">Blogs</h3>
         <ul className="blogList">
          {listBlogStore  ?
            listBlogStore.map((elem, key)=>{
              return(
                <li key={key}>
                  <p className="title">{elem.title}</p>
                  <p className="content">{elem.content}</p>
                  <div className="blogFooter">
                    <span>By: {elem.author}</span>
                    <span>Date: {elem.date}</span>
                  </div>
                </li>
              )
            })
           
          : <div className="nolist">There is no Blog in the list</div>
          }
            
           
         </ul>
      </div>  
      </div>  
   </>
  );
}

export default Blog;
