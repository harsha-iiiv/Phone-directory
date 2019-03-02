import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import UniqueID from 'react-html-id';
import User from './users';
import Home from './route';
import AppBar from '@material-ui/core/AppBar';
import './index.css';
import App from './App';
import Button from '@material-ui/core/Button'
var homenav;

class About extends Component {
      

    
    constructor(){
        super();
        UniqueID.enableUniqueIds(this);
        this.state={
           name:'ggg',
           number: '',
            
            phoneBook:[
                {id:this.nextUniqueId(), name: "Abc", number: "65456548"},
                {id:this.nextUniqueId(), name: "Xyz", number: "68544844"}
                ],
            showForm:false
           }
            
           
           console.log(this.state)
        
        this.handleInputChange1=(event)=>{
            this.setState({
                name:event.target.value
            })
        }
        
        this.handleInputChange2=(event)=>{
            this.setState({
                number:event.target.value
            })
        }
        this.deleteUser = (index,e)=>{
          const users = [...this.state.phoneBook];
          users.splice(index,1);
          console.log(users);
          this.setState({phoneBook:users,
           });
             }
        
        this.addContact=()=>{
            
            const newContact={
                name:this.state.name,
                number:this.state.number         
            }
            this.setState(
                { showForm: !this.state.showForm}
            )
            
            if(this.state.name==="" || this.state.number==="")
            {
                alert('Both fields are required.');
                return;
            }
                 
            this.setState( (prevState)=>({
                phoneBook:prevState.phoneBook.concat(newContact),
                 name:"",
                number:""
            })) 
                       
        }
        
        this.toggleShowForm=()=>{ 
            this.setState(
                { showForm: !this.state.showForm}
            )
        } 

        if(this.state.phoneBook) {
       
                homenav = < Home view={this.state.name}/>
           } 
           else { homenav = <div>Loading ...</div>
            }                         
    }
   

  render() {
  
      let form=null;
      if(this.state.showForm)
      {
          form=
             (  
              <div className="container">
              <form className="form">
              <div class="form-group">
                <input type="text" className="form-control" onChange={this.handleInputChange1} value={this.state.name} placeHolder="Name" />
              </div>
              <div class="form-group">
                <input type="text" className="form-control" onChange={this.handleInputChange2} value={this.state.number} placeHolder="Number"/>
              </div>
              
                 <button type="button" className="btn btn-primary" onClick={this.addContact}>Add</button> 
            </form>
            <div>
              <br/>
              <hr/>
              Name: {this.state.name}<br/>
            Phone :{this.state.number}</div>
            <hr/>
              </div>
          )
      }
    
           
    return (
      <div className="container-fluid">
      <AppBar className="ab">Subscribe</AppBar>
      <div className="row">
      <Button> <span className="lin"   onClick={this.toggleShowForm}>New Subscrption</span></Button>

      <div className="col-md-4"></div>
        
        
        <div className="col-md-4">
        <div className="App">
        <h2 className="header">users</h2>
            
        {form}
        
        {this.state.phoneBook.map((contact,index) =>{
          return (<User
             number={contact.number}
              delEvent = {this.deleteUser.bind(this,index)}> {contact.name}</User>)
        }
          /* <div className="contacts">
           <h5>{contact.name}</h5>
           <p>{contact.number}</p>
           <button onClick={ deleteHan.bind(this)}>Del</button>

           <hr/>
          </div>*/
        )} 
        </div>
        </div>
        
        
     <div className="col-md-4"></div>
     </div>
     
      </div>
    );
  }
}
export {
  About,
  homenav,
}