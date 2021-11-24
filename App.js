import React, { useState, useEffect } from 'react';
import ReactDOM from "react-dom";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  
} from "react-router-dom";
import './App.css';
import Countries from './Countries';
import SingleCountry from './SingleCountry';
import Header from './Header';
import Mode from './Mode';


<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css" integrity="sha512-NhSC1YmyruXifcj/KFRWoC561YpHpc5Jtzgvbuzx5VozKpWvQ+4nXhPdFgmx8xqexRcpAglTj9sIBWINXa8x5w==" crossorigin="anonymous" referrerpolicy="no-referrer" />


function App(){
  const[color, setColor] = useState('lightC');
  return(
    <body className={color}>
    <Router >
         <div class="beg">
         <Header/>
         <Mode changeClass={color=>setColor(color)}/>
         </div>
      <Switch>

        <Route exact path="/"> <Countries  /> </Route>
        <Route path="/:code" > <SingleCountry />
        </Route>
       
      </Switch>
      
   
      </Router>
      </body>
  )
}



export default App;
