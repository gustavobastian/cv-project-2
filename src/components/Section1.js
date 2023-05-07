import React, { useState } from 'react'
import '../styles/Section1.css';
import face from '../assets/face.jpeg'

const Section1 = (props)=> {
    const [state,setState]= useState(props.values)  
        
        
    
    const handleClickName=()=>{
        console.log('this is:', state.name);
        let response=prompt("name:",state.name);
        if((response==="")||response===null){
            return;
        }
        else{            
            setState({
                name:response,
                telephone:state.telephone,  
                contact:state.contact,
                title:state.title, 
                educations:state.educations,
                education : state.education,                
                experiences:state.experiences,
                experience:state.experience,
              })
              props.values.name=response;
        }
    };
    const handleClickTitle=()=>{
        console.log('the ocuppation is:', state.title);
        let response=prompt("title:",state.title)
        if((response==="")||response===null){
            return;
        }
        else{
            setState({
                title:response,
            });
            setState({
                name:state.name,
                telephone:state.telephone,  
                contact:state.contact,
                title:response, 
                educations:state.educations,
                education : state.education,                
                experiences:state.experiences,
                experience:state.experience,
              })
              props.values.title=response;
        }
    };

    
        return (
            <div className="Section1">
            <img src={face}   alt="Person Pic" ></img>
            <div className="TitleSection">
                <div className="labelSection1">
                    <div id="namePerson" onClick={handleClickName.bind(this,'')}>{state.name}</div>                
                </div>
                <div onClick={handleClickTitle.bind(this,'')}>
                    <div id="titlePerson" className="dataSection1">                 
                    {state.title} 
                    </div>
                </div>
            </div>
            </div>
        )
    
}



export default Section1;