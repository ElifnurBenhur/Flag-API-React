import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

function CtoN({col}){
 
  const[borN,setBorN]=useState('');
      useEffect(() => {
        axios.get(`https://restcountries.com/v2/alpha/${col}?fields=name;`).then((response) => {
          setBorN(response.data.name);
        });
              
      },[]);
      return(
      
                <h4 class="border">{borN}</h4>
      )

}

export default CtoN