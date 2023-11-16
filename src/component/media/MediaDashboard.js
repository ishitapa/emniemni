
import React, { useState, useEffect } from "react";
//import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import effects from '../../images/effects.png';
import borders from '../../images/borders.png';
import stickers from '../../images/stickers.png';
import crop from '../../images/crop.png';
import rotate from '../../images/rotate.png';
import brightness from '../../images/brightness.png';
import hue_saturation from '../../images/hue_saturation.png';
import rgb_effect from '../../images/rgb_effect.png';
import fonts from '../../images/fonts.png';
import filter1 from '../../images/filter1.JPG';
import filter2 from '../../images/filter2.JPG';
import filter3 from '../../images/filter3.JPG';
import filter4 from '../../images/filter4.JPG';
import filternone from '../../images/filternone.JPG';
import photo from '../../images/photo.jpg';



function MediaDashboard() {

  // const [isLoader, setIsLoader] = useState(false);
  const [show,setShow] = useState({
    tab1 : true,
    tab2 : false,
    tab3 : false,
    tab4 : false,
    tab5 : false,
    tab6 : false,
    tab7 : false,
    tab8 : false
  });
  const [selectedImage, setSelectedImage] = useState();
  const [effectConstant, setEffectConstant] = useState({
    red:"rgba(190,34,102,0.4)",
    yellow:"rgba(255,193,7,0.4)",
    blue:"rgba(0,34,122,0.4)",
    green:"rgba(0,134,22,0.4)",
  });
  const [effectSelect, setEffectSelect] = useState({
    red: false,
    yellow: false,
    blue: false,
    green: false,
    none: true
  });
  
  const effectsHandler = (e) =>{
    setShow({
      tab2 : false,
    tab3 : false,
    tab4 : false,
    tab5 : false,
    tab6 : false,
    tab7 : false,
    tab8 : false,
      tab1 : true
    })
  }
  const borderHandler = (e) =>{
    setShow({
      tab1 : false,
    tab3 : false,
    tab4 : false,
    tab5 : false,
    tab6 : false,
    tab7 : false,
    tab8 : false,
      tab2 : true
    })
  }
  const stickersHandler = (e) =>{
    setShow({
      tab2 : false,
      tab1 : false,
      tab4 : false,
      tab5 : false,
      tab6 : false,
      tab7 : false,
      tab8 : false,
      tab3 : true
    })
  }
  const cropHandler = (e) =>{
    setShow({
      tab2 : false,
    tab3 : false,
    tab1 : false,
    tab5 : false,
    tab6 : false,
    tab7 : false,
    tab8 : false,
      tab4 : true
    })
  }
  const rotateHandler = (e) =>{
    setShow({
      tab2 : false,
    tab3 : false,
    tab4 : false,
    tab1 : false,
    tab6 : false,
    tab7 : false,
    tab8 : false,
      tab5 : true
    })
  }
  const brightnessHandler = (e) =>{
    setShow({
      tab2 : false,
    tab3 : false,
    tab4 : false,
    tab5 : false,
    tab1 : false,
    tab7 : false,
    tab8 : false,
      tab6 : true
    })
  }
  const hue_saturationHandler = (e) =>{
    setShow({
      tab2 : false,
    tab3 : false,
    tab4 : false,
    tab5 : false,
    tab6 : false,
    tab1 : false,
    tab8 : false,
      tab7 : true
    })
  }
  const rgb_effectHandler = (e) =>{
    setShow({
      tab2 : false,
    tab3 : false,
    tab4 : false,
    tab5 : false,
    tab6 : false,
    tab7 : false,
    tab1 : false,
      tab8 : true
    })
  }
  

  const imageChange = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      setSelectedImage(e.target.files[0]);
    }
  };

  const removeSelectedImage = () => {
    setSelectedImage();
  };

  const effectBlue = () =>{
    setEffectSelect({
      red: false,
      yellow: false,
      blue: true,
      green: false,
      none: false
    })
  }
  const effectRed = () =>{
    setEffectSelect({
      red: true,
      yellow: false,
      blue: false,
      green: false,
      none: false
    })
  }
  const effectGreen = () =>{
    setEffectSelect({
      red: false,
      yellow: false,
      blue: false,
      green: true,
      none: false
    })
  }
  const effectYellow = () =>{
    setEffectSelect({
      red: false,
      yellow: true,
      blue: false,
      green: false,
      none: false
    })
  }
  const effectNone = () =>{
    setEffectSelect({
      red: false,
      yellow: false,
      blue: false,
      green: false,
      none: true
    })
  }
  
useEffect(() => {
 }, []);


  return (
   <>
   <div className="wrap">
      <div className="wrap_full">
      <div className="ayilad_ptoto_container row">
            <div className="ayilad_nav_panel">
                <div className="ayilad_nav_panel_inner">
                    <div className="ayilad_nav"> 
                        <ul className="tabs">
                            <li className={show.tab1 ? "active" : ""}>
                              <button
                               onClick={effectsHandler}
                              ><img src={effects} alt="Effects" title="Effects"/></button> 
                            </li>
                            <li className={show.tab2 ? "active" : ""}> 
                              <button
                               onClick={borderHandler}
                              ><img src={borders} alt="Borders" title="Borders"/></button>
                            </li>   
                            <li className={show.tab3 ? "active" : ""}> 
                              <button
                               onClick={stickersHandler}                 
                              ><img src={stickers} alt="Stickers" title="Stickers"/></button>
                            </li>
                            <li className={show.tab4 ? "active" : ""}> 
                              <button
                               onClick={cropHandler}                 
                              ><img src={crop} alt="Crop" title="Crop"/></button>
                            </li>    
                            <li className={show.tab5 ? "active" : ""}> 
                              <button
                               onClick={rotateHandler}                 
                              ><img src={rotate} alt="Rotate" title="Rotate"/></button>
                            </li>
                            <li className={show.tab6 ? "active" : ""}> 
                              <button
                               onClick={brightnessHandler}                 
                              ><img src={brightness} alt="Brightness" title="Brightness"/></button>
                            </li>   
                            <li className={show.tab7 ? "active" : ""}> 
                              <button
                               onClick={hue_saturationHandler}                 
                              ><img src={hue_saturation} alt="Hue-saturation" title="Hue-saturation"/></button>
                            </li>
                            <li className={show.tab8 ? "active" : ""}> 
                              <button
                               onClick={rgb_effectHandler}                 
                              ><img src={rgb_effect} alt="RGB Effect" title="RGB Effect"/></button>
                            </li>   
                           
                        </ul>            
                    </div> 
                    <div className="ayilad_nav_sub">
                      {show.tab1 &&
                        <div id="tab-1" className="tab-content">
                            <div className="ayilad_submenu_holder">
                            <button className="noBg" onClick={effectNone}><img  className={effectSelect.none ? "active" :""} src={filternone} alt="" title=""/></button>

                            <button className="noBg" onClick={effectRed}><img className={effectSelect.red ? "active" :""} src={filter1} alt="" title=""/></button>
                            <button className="noBg" onClick={effectYellow}><img  className={effectSelect.yellow ? "active" :""} src={filter2} alt="" title=""/></button>
                            <button className="noBg" onClick={effectBlue}><img  className={effectSelect.blue ? "active" :""} src={filter3} alt="" title=""/></button>
                            <button className="noBg" onClick={effectGreen}><img  className={effectSelect.green ? "active" :""} src={filter4} alt="" title=""/></button>
              
                            </div> 
                               
                        </div>
                      }
                     {show.tab2 &&
                        <div id="tab-2" className="tab-content">
                            <div className="ayilad_submenu_holder">
                              <img className="active" src={filter1} alt="" title=""/><img src={filter2} alt="" title=""/>
                              <img src={filter3} alt="" title=""/><img src={filter4} alt="" title=""/><img src={filter1} alt="" title=""/>
                              <img src={filter4} alt="" title=""/>
                            </div> 
                            {/* <div className="ayilad_submenu_control">
                                  <button className="action_btn black_btn">Cancel</button>
                                  <button className="action_btn blue_btn">Apply</button>  
                            </div> */}
                        </div>
                    }
                    {show.tab3 &&
                      <div id="tab-3" className="tab-content">
                          <div className="ayilad_submenu_holder">
                          <p className="action_details">Type 1</p>
                            <img className="active" src={filter1} alt="" title=""/>
                            <img src={filter2} alt="" title=""/>
                              <p className="action_details">Type 2</p>
                            <img src={filter3} alt="" title=""/>
                          </div> 
                          <div className="ayilad_submenu_control">
                                <button className="action_btn black_btn">Cancel</button>
                                <button className="action_btn blue_btn">Apply</button>  
                          </div>       
                      </div>
                    }
                    {show.tab4 &&
                     <div id="tab-4" className="tab-content">
                           <p className="action_details">New width: <span>300px</span></p>
                           <p className="action_details">New height: <span>300px</span></p>
                           <div className="ayilad_submenu_control">
                              <button className="action_btn black_btn">Cancel</button>
                              <button className="action_btn blue_btn">Crop</button>  
                         </div>      
                     </div>
                    }
                    {show.tab5 &&
                      <div id="tab-5" className="tab-content">
                         <div className="ayilad_submenu_control">
                         <p className="action_details">Rotate by: <span>30 deg</span></p>
                              <button className="action_btn black_btn">Cancel</button>
                              <button className="action_btn blue_btn">Rotate</button>  
                         </div> 
                      </div>
                    }
                    {show.tab6 &&
                      <div id="tab-6" className="tab-content">
                          <p className="action_details">Brightness</p>
                         <div className="ayilad_submenu_control">
                              <button className="action_btn black_btn">Cancel</button>
                              <button className="action_btn blue_btn">Apply</button>  
                         </div> 
                      </div>
                    }
                    {show.tab7 &&
                      <div id="tab-7" className="tab-content">
                            <p className="action_details">Hue Saturation</p>
                          <div className="ayilad_submenu_control">
                                <button className="action_btn black_btn">Cancel</button>
                                <button className="action_btn blue_btn">Apply</button>  
                          </div>
                      </div>
                    }
                    {show.tab8 &&
                      <div id="tab-8" className="tab-content">
                          <p className="action_details">Rgb effect</p>
                          <div className="ayilad_submenu_control">
                                <button className="action_btn black_btn">Cancel</button>
                                <button className="action_btn blue_btn">Apply</button>  
                          </div>
                      </div>
                     }
          

                    </div> 
                </div>    
            </div>
            <div className="ayilad_ptoto_panel">
                {/* <!-- when photo is not uploaded starts here--> */}
                <div className="invisible">
                 <input 
                    accept="image/*"
                    type="file"
                    onChange={imageChange}
                 /> 
                <button type="button" className="button image-upload">
                <i className="fa fa-upload" aria-hidden="true"></i> Upload Image 
                </button>
                </div>
                {/* <!-- when photo is not uploaded end here --> */}
                {selectedImage ?
                  <div className="photo_holder">
                    <img 
                      src={URL.createObjectURL(selectedImage)}
                      alt="Thumb"
                      title=""/>
                      <div style={{ background: 
                        effectSelect.red ? effectConstant.red :
                        effectSelect.blue ? effectConstant.blue :
                        effectSelect.green ? effectConstant.green :
                        effectSelect.yellow ? effectConstant.yellow :
                        ""
                        }} className="effect"></div>
                  </div> : <div className='notSelected'> No image Selected</div>
                }
                

                <div className="ayilad_action_panel">
                    <button className="action_btn black_btn">Reset All</button>
                    <button className="action_btn yellow_btn">Download</button>
                    <button className="action_btn blue_btn"
                      onClick={removeSelectedImage }
                    >Remove Image </button>
                 
                </div>
            </div>
            
      </div>         
      </div>  
   </div>  
   </>
  );
}

export default MediaDashboard;
