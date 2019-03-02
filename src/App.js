 import React, { Component } from 'react'

import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import User from './users';
import Home from './route';
import {About,homenav} from './functional';
import "./index.css";
 import AppBar from "@material-ui/core/AppBar"
 
var users1;
function App() {
  return (
    <div> 
      <AppBar className='head'> Phone Directory</AppBar>   
    <Router>
      <div>
        <br/><br/><br/><br/><br/><br/>
          <li>
            <Link to="/add"><button className="add-btn">Add</button>  </Link>
          </li>
        
        

         

        <Route exact path="/" component={Home} />
        <Route path="/add" component={About} />
       </div>
    </Router>
    </div>

  );
}

 





/*function Home(props) {
   return (
    <div>
      <h2>Add {props.name}</h2>
    </div>
  );
}*/

 

export default App;
 
 