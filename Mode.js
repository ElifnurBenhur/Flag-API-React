import React, { useState, useEffect } from 'react';
import {HiOutlineMoon} from 'react-icons/hi';
import './App.css';
function Mode(props){
    const[s, setS] = useState(false);
   
    return(
      <div class="mod"><button class="but" onClick={ ()=>{
        setS(!s);
        if(s){
            props.changeClass('dark');
            
        }
        else{
            props.changeClass('lightC');
            
        }
      }} ><HiOutlineMoon/>Dark Mode </button></div>
    )
  }

  export default Mode;