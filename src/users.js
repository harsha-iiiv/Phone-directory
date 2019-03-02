import React from 'react'
import './index.css';
const users = (props)=>{
  return(<li>
    
  <span className="det"><b>name:</b> {props.children}</span><span className="det"> <b>phone</b> = {props.number}</span>
  <button className="des" onClick={props.delEvent}>Delete</button>
  <hr/> </li>)
}
export default users;