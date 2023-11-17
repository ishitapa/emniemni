import React from "react";
import { BrowserRouter as Router, Routes, Link, Route } from "react-router-dom"

//import logo from './logo.svg';
//import './css/faicon.css' ;
import './css/style.css';
import WeatherDashboard from './component/weather/WeatherDashboard';
import Blog from './component/blog/Blog';
import MediaDashboard from './component/media/MediaDashboard';

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
          <li className='specialFont'>
              <Link to="/media">Photo Editor </Link>
            
          </li>
        </ul>
      </aside>
      <section className='mainContain'>
      <Routes>
         <Route path="/" element={<WeatherDashboard/>}/>
         <Route path="/Blog" element={<Blog/>}/>
         <Route path="/media" element={<MediaDashboard/>}/>
      </Routes>

      </section>
      </Router>
    </div>
  );
}

export default RoutesCont;
