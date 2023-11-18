
import React, { useState, useEffect,useRef } from "react";
//import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import effects from '../../images/effects.png';
import borders from '../../images/borders.png';
import stickers from '../../images/stickers.png';
import croping from '../../images/crop.png';
import rotateimg from '../../images/rotate.png';
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
import sticker1 from '../../images/sticker1.png';
import sticker2 from '../../images/sticker2.png';
import sticker3 from '../../images/sticker3.png';
import arrow from '../../images/arrow.png';
import twoArrow from '../../images/twoArrow.png';



import ReactCrop, {   centerCrop,
  makeAspectCrop,
  Crop,
  PixelCrop,
  convertToPixelCrop} from 'react-image-crop'
import 'react-image-crop/dist/ReactCrop.css';
import Draggable, { DraggableData, DraggableEvent } from "react-draggable";

import { toPng } from 'html-to-image';

function MediaDashboard() {
  const elementRef = useRef(null);
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
  const [borderComponent, setBorderComponent] = useState({
      width: 0,
      color: "",
      style:""
  })

  const imageChange = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      setSelectedImage(e.target.files[0]);
    }
  };
  const htmlToImageConvert = () => {
    toPng(elementRef.current, { cacheBust: false })
      .then((dataUrl) => {
        const link = document.createElement("a");
        link.download = "my-image-name.png";
        link.href = dataUrl;
        link.click();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const removeSelectedImage = () => {
    setSelectedImage();
  };
  
  // .................... image effect .............................
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
  // .................... image effect .............................

// ....................... image border ................................

const borderComponentHandler = (e) =>{
  const name = e.target.name;
  const val = e.target.value;
  setBorderComponent({
    ...borderComponent,
    [name] : val,
  })
}

// ....................... image border ................................

// ..................................... image sticker ................................
const [sticker,setSticker] = useState({
  sticker1:false,
  sticker2:false,
  sticker3:false,
})
const clickSticker1 = () =>{
 // console.log(data);
  // var newDragg = document.createElement("Draggable");
  // newDragg.setAttribute("id", "dragg"+data);
  // document.getElementById("stickerOuter").appendChild(newDragg);
  // var newDiv = document.createElement("div");
  // newDiv.setAttribute("id", "stick"+data);
  // newDiv.setAttribute("class", "stick");
  // var image = document.createElement("img");
  // image.setAttribute("src", sticker1);
  //   document.getElementById("dragg"+data).appendChild(newDiv);
  //   document.getElementById("stick"+data).appendChild(image);
  setSticker({
    ...sticker,
    sticker1:true
  })
}
const clickSticker2 = (e) =>{
  setSticker({
    ...sticker,
    sticker2:true
  })
}
const clickSticker3 = (e) =>{
  setSticker({
    ...sticker,
    sticker3:true
  })
}

// ........................................... image sticker ...........................


//.................................. image rotate .............................
const [rotate,setRotate] = useState({
  left:false,
  right:false,
  top:false,
  bottom:false,
  none: true
})
const [rotateVal,setRotateVal] = useState("");

const rotateLeftHandler = () =>{
  setRotateVal("rotate(-270deg)")
}
const rotateTopHandler = () =>{
  setRotateVal("rotate(180deg)")
}
const rotateRightHandler = () =>{
  setRotateVal("rotate(270deg)")
}
const rotateBottomHandler = () =>{
  setRotateVal("rotate(0deg)")
}

// .........................................image rotate .............................

//.................................. image brightness .............................

const [brightnessVal, setBrightnessVal] = useState(1)

const brightnessComponentHandler = (e) =>{
  setBrightnessVal(e.target.value);
}
const cancelBrightnessComponentHandler = () =>{
  setBrightnessVal(1)
}
const [hueVal, setHueVal] = useState(0)

const hueComponentHandler = (e) =>{
  setHueVal(e.target.value);
}
const cancelHueComponentHandler = () =>{
  setHueVal(0)
}

const [saturateVal, setSaturateVal] = useState(100)

const saturateComponentHandler = (e) =>{
  setSaturateVal(e.target.value);
}
const cancelSaturateComponentHandler = () =>{
  setSaturateVal(100)
}
// ............................................. resizeBy  ............................
  
  const [size, setSize] = useState({ x: 200, y: 200 });

  const handler = (mouseDownEvent) => {
    const startSize = size;
    const startPosition = { x: mouseDownEvent.pageX, y: mouseDownEvent.pageY };
    
    function onMouseMove(mouseMoveEvent) {
      setSize(currentSize => ({ 
        x: startSize.x - startPosition.x + mouseMoveEvent.pageX, 
        y: startSize.y - startPosition.y + mouseMoveEvent.pageY 
      }));
    }
    function onMouseUp() {
      document.body.removeEventListener("mousemove", onMouseMove);
      // uncomment the following line if not using `{ once: true }`
      // document.body.removeEventListener("mouseup", onMouseUp);
    }
    
    document.body.addEventListener("mousemove", onMouseMove);
    document.body.addEventListener("mouseup", onMouseUp, { once: true });
  };
  const [size2, setSize2] = useState({ x: 200, y: 200 });

  const handler2 = (mouseDownEvent) => {
    const startSize = size;
    const startPosition = { x: mouseDownEvent.pageX, y: mouseDownEvent.pageY };
    
    function onMouseMove(mouseMoveEvent) {
      setSize2(currentSize => ({ 
        x: startSize.x - startPosition.x + mouseMoveEvent.pageX, 
        y: startSize.y - startPosition.y + mouseMoveEvent.pageY 
      }));
    }
    function onMouseUp() {
      document.body.removeEventListener("mousemove", onMouseMove);
      // uncomment the following line if not using `{ once: true }`
      // document.body.removeEventListener("mouseup", onMouseUp);
    }
    
    document.body.addEventListener("mousemove", onMouseMove);
    document.body.addEventListener("mouseup", onMouseUp, { once: true });
  };
  const [size3, setSize3] = useState({ x: 200, y: 200 });

  const handler3 = (mouseDownEvent) => {
    const startSize = size3;
    const startPosition = { x: mouseDownEvent.pageX, y: mouseDownEvent.pageY };
    
    function onMouseMove(mouseMoveEvent) {
      setSize3(currentSize => ({ 
        x: startSize.x - startPosition.x + mouseMoveEvent.pageX, 
        y: startSize.y - startPosition.y + mouseMoveEvent.pageY 
      }));
    }
    function onMouseUp() {
      document.body.removeEventListener("mousemove", onMouseMove);
      // uncomment the following line if not using `{ once: true }`
      // document.body.removeEventListener("mouseup", onMouseUp);
    }
    
    document.body.addEventListener("mousemove", onMouseMove);
    document.body.addEventListener("mouseup", onMouseUp, { once: true });
  };




// ............................................. resizeBy  ............................
  
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
                              ><img src={effects} alt="Effects" title="Effects"/>
                               <span>Effect</span>
                              </button> 
                            </li>
                            <li className={show.tab2 ? "active" : ""}> 
                              <button
                               onClick={borderHandler}
                              ><img src={borders} alt="Borders" title="Borders"/>
                              <span>Border</span>
                              </button>
                            </li>   
                            <li className={show.tab3 ? "active" : ""}> 
                              <button
                               onClick={stickersHandler}                 
                              ><img src={stickers} alt="Stickers" title="Stickers"/>
                              <span>Stickers</span>
                              </button>
                            </li>
                            <li className={show.tab4 ? "active" : ""}> 
                              <button
                               onClick={cropHandler}                 
                              ><img src={croping} alt="Crop" title="Crop"/>
                              <span>Crop</span>
                              </button>
                            </li>    
                            <li className={show.tab5 ? "active" : ""}> 
                              <button
                               onClick={rotateHandler}                 
                              ><img src={rotateimg} alt="Rotate" title="Rotate"/>
                              <span>Rotate</span>
                              </button>
                            </li>
                            <li className={show.tab6 ? "active" : ""}> 
                              <button
                               onClick={brightnessHandler}                 
                              ><img src={brightness} alt="Brightness" title="Brightness"/>
                               <span>Brightness</span>
                              </button>
                            </li>   
                            <li className={show.tab7 ? "active" : ""}> 
                              <button
                               onClick={hue_saturationHandler}                 
                              ><img src={hue_saturation} alt="Hue-saturation" title="Hue-saturation"/>
                              <span>Hue Saturation</span>
                              </button>
                            </li>
                              
                           
                        </ul>            
                    </div> 
                    <div className="ayilad_nav_sub">
                      {show.tab1 &&
                        <div id="tab-1" className="tab-content">
                            <div className="ayilad_submenu_holder">
                          <p className="action_details">Effects</p>

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
                            <p className="action_details">Border width</p>
                             <input type='text' name="width"
                              value={borderComponent.width}
                              onChange={borderComponentHandler}
                              />
                              <p>Border color</p>
                              <input type='color' name="color"
                                  value={borderComponent.color}
                              onChange={borderComponentHandler}

                              />
                              <p>Border type</p>
                              <select value={borderComponent.style} name="style"
                              onChange={borderComponentHandler}

                               >
                                <option value='solid'>Solid</option>
                                <option value='dashed'>Dashed</option>
                                <option value='dotted'>Dotted </option>
                              </select>
                            </div> 
                            
                        </div>
                    }
                    {show.tab3 &&
                      <div id="tab-3" className="tab-content">
                          <div className="ayilad_submenu_holder">
                          <p className="action_details">Stickers</p>
                          <button className="noBg" onClick={clickSticker1}>
                            <img className="" src={sticker1} alt="" title=""/>
                          </button>
                          <button className="noBg" 
                            onClick={clickSticker2}
                          >
                            <img className="" src={sticker2} alt="" title=""/>
                          </button>  
                          <button className="noBg" 
                             onClick={clickSticker3}
                          >  
                            <img className="" src={sticker3} alt="" title=""/>
                          </button>  
                          </div> 
                          {/* <div className="ayilad_submenu_control">
                                <button className="action_btn black_btn">Cancel</button>
                                <button className="action_btn blue_btn">Apply</button>  
                          </div>        */}
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
                         <p className="action_details">Rotate Image </p>
                         <div className="btnGroup">
                              <button className="noBg rotate left"
                                onClick={rotateLeftHandler}
                              ><img src={arrow} alt=""/></button>
                              <button className="noBg rotate top"
                                onClick={rotateTopHandler}
                              ><img src={arrow} alt=""/></button>
                              <button className="noBg rotate right"
                                onClick={rotateRightHandler}
                              ><img src={arrow} alt=""/></button> 
                              <button className="noBg rotate bottom"
                                onClick={rotateBottomHandler}
                              ><img src={arrow} alt=""/></button>
                         </div>
                         </div> 
                      </div>
                    }
                    {show.tab6 &&
                      <div id="tab-6" className="tab-content">
                          <p className="action_details">Brightness</p>
                          <p className="action_details">
                             <input type='range' name="width"
                              defaultValue={brightnessVal}
                              onChange={brightnessComponentHandler}
                              min={0}
                              max={3}
                              step={0.25}
                              />  
                          </p>
                            <div className="ayilad_submenu_control">
                              <button className="action_btn black_btn"
                                onClick={cancelBrightnessComponentHandler}                              
                              >Cancel</button>
                            </div>  
                      </div>
                    }
                    {show.tab7 &&
                      <div id="tab-7" className="tab-content">
                            <p className="action_details">Hue</p>
                            
                            <p className="action_details">
                             <input type='range' name="width"
                              defaultValue={hueVal}
                              onChange={hueComponentHandler}
                              min={0}
                              max={360}
                              step={5}
                              />  
                          </p>
                          <div className="ayilad_submenu_control">
                              <button className="action_btn black_btn"
                                onClick={cancelHueComponentHandler}                              
                              >Cancel</button>
                            </div>
                          <p className="action_details">Saturation</p>
                            
                            <p className="action_details">
                             <input type='range' name="width"
                              defaultValue={saturateVal}
                              onChange={saturateComponentHandler}
                              min={0}
                              max={200}
                              step={10}
                              />  
                          </p>
                          <div className="ayilad_submenu_control">
                              <button className="action_btn black_btn"
                                onClick={cancelSaturateComponentHandler}                              
                              >Cancel</button>
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
                  <div className="photo_holder" ref={elementRef}>
                   
                    <img 
                      src={URL.createObjectURL(selectedImage)}
                      alt="Thumb"
                      title=""
                      style={{ 
                        borderWidth : borderComponent.width + "px", 
                        borderColor : borderComponent.color, 
                        borderStyle : borderComponent.style, 
                        transform: rotateVal,
                        filter: "brightness("+brightnessVal+") hue-rotate("+ hueVal+"deg) saturate("+saturateVal+"%)" ,
                        }} 
                      /> 
               
                      <div style={{ background: 
                        effectSelect.red ? effectConstant.red :
                        effectSelect.blue ? effectConstant.blue :
                        effectSelect.green ? effectConstant.green :
                        effectSelect.yellow ? effectConstant.yellow :
                        ""
                        }} className="effect"></div>
                        <div className="stickerOuter" id="stickerOuter">
                          {sticker.sticker1 &&
                           <Draggable>
                            <div className="stick">
                              <img src={sticker1} alt=""  style={{ width: size.x, height: size.y }}/>
                              <button type="button" className="noBg resize" onMouseDown={handler} ><img src={twoArrow} alt=""/></button>
                              <button className="noBg" onClick={()=>setSticker({...sticker, sticker1:false})}
                              >X</button>
                            </div>
                          </Draggable>
                          }
                          {sticker.sticker2 &&
                          <Draggable>
                            <div className="stick">
                              <img src={sticker2} alt="" style={{ width: size2.x, height: size2.y }}/>
                              <button type="button" className="noBg resize" onMouseDown={handler2} ><img src={twoArrow} alt=""/></button>
                              <button className="noBg" onClick={()=>setSticker({...sticker, sticker2:false})}
                              >X</button>
                            </div>
                          </Draggable>
                          }
                          {sticker.sticker3 &&
                          <Draggable>
                            <div className="stick">
                              <img src={sticker3} alt="" style={{ width: size3.x, height: size3.y }}/>
                              <button type="button" className="noBg resize" onMouseDown={handler3} ><img src={twoArrow} alt=""/></button>
                              <button className="noBg" onClick={()=>setSticker({...sticker, sticker3:false})}
                               >X</button>
                            </div>
                          </Draggable>
                          }
                        </div>
                  </div> : <div className='notSelected'> No image Selected</div>
                }
                


















                <div className="ayilad_action_panel">
                    <button className="action_btn black_btn">Reset All</button>
                    <button className="action_btn yellow_btn"
                      onClick={htmlToImageConvert}
                    >Download</button>
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
