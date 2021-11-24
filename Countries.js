
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import {
  BrowserRouter as Router,
  Link, 
} from "react-router-dom";


const appURL = "https://restcountries.com/v2/all";
function Countries(props) {
  
    const [countryList, setCountryList] = useState([]);
    const [q, setQ] = useState("");
    const [filterParam, setFilterParam] = useState(["All"]);
    useEffect(() => {
      axios.get(appURL).then((response) => {
        setCountryList(response.data);
        console.log(countryList);
      });
    }, []);
    
    return (
      <>
      <div>
      
      <div class="ser"><input placeholder="Search for a country..." onChange={(e) => setQ(e.target.value)} /></div>
        <div class="fil"> 
          <select onChange={(e) => {setFilterParam(e.target.value);}}>
        <option value="All">Filter By Region</option>
                            <option value="Africa">Africa</option>
                            <option value="Americas">America</option>
                            <option value="Asia">Asia</option>
                            <option value="Europe">Europe</option>
                            <option value="Oceania">Oceania</option>
                        </select>
                        </div>
        <div class="sText"><h3>You are searching for:{q}</h3></div>
      <div class="flags">
        {countryList.map((country, index) => {
          const {
            name, flags, population, region, capital,alpha3Code



          } = country;
          const lowName=name?.toLowerCase();
          const lowCap=capital?.toLowerCase();
          if(region==filterParam||filterParam=="All"){
          if(lowName?.includes(q.toLocaleLowerCase())||lowCap?.includes(q.toLowerCase())){
          return (
            <Link key={name} class="lin" to={`/${alpha3Code}`}>
              <div key={`country-${index}`} className="country">

              <div className="flag" style={{
                  backgroundImage: "url(" + flags.png + ")",
                  
                }}> </div>
                <div class="explain">
                  <h1>{name}</h1>
                  <h2>Population:{population}</h2>
                  <h2>Region:{region}</h2>
                  <h2>Capital:{capital}</h2>
                </div>

              </div>
            </Link>
          );
              }
        }
      }
        )}

      </div>
      </div>
      </>
      
        
    
    )
  }
  export default Countries;