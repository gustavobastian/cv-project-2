import React, { Component ,useState} from 'react'
import '../styles/Header.css';

const Header = (props) => {
    
    const [state,setState]=useState(props.values)    ;
    

    
    /*
    
    this.handleClickContact=this.handleClickContact.bind(this);   
    this.handleClickTelephone=this.handleClickTelephone.bind(this);*/
    
    const handleClickTelephone=(event)=>{
        console.log('this is:', state.telephone);
        let response=prompt("telephone:",state.telephone);
        if((response==="")||response===null){
            console.log("here")}
        else{
            setState({
                name:state.name,
                telephone:response,  
                contact:state.contact,
                title:state.title, 
                educations:state.educations,
                education : state.education,                
                experiences:state.experiences,
                experience:state.experience,
              })
              props.values.telephone=response;
        } 
        
       
    };
    const handleClickContact=(event)=>{
        console.log('the email is:', state.contact);
        let response=prompt("Email:",state.contact)
        if((response==="")||response===null){            
            return;}
        else{                        
            setState({
                name: state.name,
                telephone: state.telephone,  
                contact:response,
                title: state.title, 
                educations: state.educations,
                education : state.education,                
                experiences: state.experiences,
                experience: state.experience,
                })
                props.values.contact=response;    
            
        }
    };

    
        return (
            <div className="Header">
            <div className="telephone">
                <div className="LabelHeader">Tel:</div>
                <div className="dataHeader"><div id="telephone" onClick={(event)=>{handleClickTelephone(event)}}> {props.values.telephone}</div>
                </div>
            </div>   
            <div className="address">
                <div className="LabelHeader">Contact: </div>
                <div className="dataHeader"> <div id="contact" onClick={(event)=>{handleClickContact(event)}}> {state.contact}</div>
                </div>
            </div>
            
            </div>
        )
    
}



export default Header;