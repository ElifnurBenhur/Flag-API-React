import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
  Link,
  useParams
} from "react-router-dom";
import CtoN from './CtoN';
import './App.css';

function SingleCountry(props){
  
    const [c, setC] = useState([]);
    
    
    const {code}=useParams();
    
    useEffect(() => {
      console.log(code);
      window.scrollTo(0, 0);
            axios.get(`https://restcountries.com/v2/alpha/${code}`).then((response) => {
              setC(response.data);
              
            });
            
    }, [code]);
     
    if(c.languages&&c.currencies&&c.borders){
    return (
      
        <>
        
        <div class="sC">
        
            <Link to={`/`}><button class="back">Back</button></Link>
            <div class="sFlag"><img class="sFimg" src={c.flags.png}/></div>
            <div key={c.name} className="a">
              
           
              <div class="info1">
              <h1>{c.name}</h1>
              <h2>Native name:{c.nativeName}</h2>
              <h2>Region:{c.region}</h2>
              <h2>Subregion:{c.subregion}</h2>
              <h2>Population:{c.population}</h2>
              <h2>Capital:{c.capital}</h2>
              </div>
              <div class="info2">
              <h2>Top Level Domain:{c.topLevelDomain}</h2>
              <h2>Languages:{ c.languages.map((l,ind)=>{
               const{
                 name
               }=l
               return(
                <div key={`l-${ind}`} className="l">
                  <h4>{name},</h4>
                </div>
               )
              })}</h2>
            
               <h2>Currencies:{ c.currencies.map((cu,ind)=>{
               const{
                 name,
                 symbol
               }=cu
               return(
                 <div key={`cu-${ind}`} className="cu"> 
                 <h4>{name} {symbol}</h4>
                 </div>
               )
  
              })}</h2>
              </div>
              <div>
              <h2>Borders:{c.borders.map((b)=>{
                     return(
                     <Link class="lin" to={`/${b}`}><CtoN col={b}/></Link>
                     )
                     })} </h2>
              </div>
              
              </div>
              </div>
              
              </>
        
          
     
    )}
    else{
      return(
        <h1>Loading...</h1>
      )
    }
  
  }
  export default SingleCountry;
  /*
       <h1>Languages:{ c.languages.map((l,ind)=>{
               const{
                 name
               }=l
               return(
                <div key={`l-${ind}`} className="l">
                  <h2>{name},</h2>
                </div>
               )
              })}</h1>
               <h1>Currencies:{ c.currencies.map((cu,ind)=>{
               const{
                 name,
                 symbol
               }=cu
               return(
                 <div key={`cu-${ind}`} className="cu"> 
                 <h2>{name} {symbol}</h2>
                 </div>
               )
  
              })}</h1>
              <h1>Borders:{c.borders.map((b)=>{
                       tra(b);
                       <CtoN tra={x}/>
                       
                     })} </h1>

   
            function bor(){
      const[borN,setBorN]=useState([]);
      useEffect(() => {
        axios.get(`https://restcountries.eu/rest/v2/alpha/${b}?fields=borders;`).then((response) => {
          setBorN(response.data);
        });
              
      }, []);

    } 
         async function  lang(){
      return(
        await
        c.languages
      )
    }
    async function cur(){
      return(
        await
        c.currencies
      )
    }     
    */