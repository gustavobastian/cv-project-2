import React, { useState,useEffect } from 'react'
import '../styles/Section3.css';
import ExperienceElement from './experienceElement';
import { FaTrashAlt} from 'react-icons/fa';


const Section3 =(props) => {
    const [state,setState]=useState(props.value)       
    
        
    useEffect(()=>{
        console.log("altered")
        let component=document.getElementById("section3");
        console.log(component)
        setTimeout(()=>{
            console.log(component)
           }, 1000)
      },[state.experiences]);

    const handlerDelete = (e)=>{
        console.log(e.target.value)
        console.log("delete "+JSON.stringify(e.target.id));  
        let localId=e.target.id;        
        props.handlerDeleteEx(localId);
    };

    
        return (
            <div className="Section3">
            <ul >
            {props.value.experiences.map((experience) => {
                return <li key={experience.id}>
                    <ExperienceElement companyName={experience.companyName} titleName={experience.titleName} dateEntry={experience.dateEntry} dateEnd={experience.dateEnd} Note={experience.note}/>
                    <FaTrashAlt id={experience.id} onClick={(event)=>{handlerDelete(event)}} className='deleteButton'>Del</FaTrashAlt>
                    </li>;
            })}
            </ul>
            </div>
            
        )
    
}



export default Section3;