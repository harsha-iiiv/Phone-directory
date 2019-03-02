import React from 'react'
import {About,homenav} from './functional';
 
const Home =(props)=>{
  console.log(props.name);
 

  return(
    <div className="h-btn"> {homenav}</div>
  )
}
 
export default Home;