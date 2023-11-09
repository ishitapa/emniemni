import React from "react";
import { BrowserRouter as Router, Routes, Link, Route } from "react-router-dom"

//import logo from './logo.svg';
import './css/style.css';
import DashBoard from './component/Dashboard';
import Blog from './component/Blog';
import Media from './component/Media';

function RoutesCont() {
  return (
    <div className="app">
       <Router>
      <aside className='aside'>
        <div className='profile specialFont'>Profile</div>
       
        <ul>
          
          <li className='specialFont'>
          <Link to="/">Weather </Link>
          </li>
          <li className='specialFont'>
          <Link to="/blog">Blog </Link>

          </li>
          {/* <li className='specialFont'>
          <Link to="/media">Social media </Link>
            
          </li> */}
        </ul>
      </aside>
      <section className='mainContain'>
      <Routes>
         <Route path="/" element={<DashBoard/>}/>
         <Route path="/Blog" element={<Blog/>}/>
         <Route path="/media" element={<Media/>}/>
      </Routes>

      </section>
      </Router>
    </div>
  );
}

export default RoutesCont;
