import React, { useState,useEffect } from 'react'
import EducationElement from '../components/educationElement';
import '../styles/Section2.css';
import { FaTrashAlt} from 'react-icons/fa';

const Section2 = (props)=>{
    
    const [state,setState]=useState(props.value);

    useEffect(()=>{
        console.log("altered")
        let component=document.getElementById("section2");
        console.log(component)
        setTimeout(()=>{
            console.log(component)
           }, 1000)
      },[state.educations]);
    
    const handlerDelete = (e)=>{
        console.log(e.target.value)
        console.log("delete "+JSON.stringify(e.target.id));  
        let localId=e.target.id;        
        props.handlerDeleteEd(localId);
    };
        return (
            <div className="Section2">            
                <ul >            
                    {props.value.educations.map((education) => {
                        return <li key={education.id} className='lineItem'>
                            <EducationElement university={education.universityName} title={education.title} dateEntry={education.dateEntry} dateEnd={education.dateEnd} Note={education.note}/>
                            <FaTrashAlt id={education.id} onClick={(event)=>{handlerDelete(event)}} className='deleteButton'>Del</FaTrashAlt>                            
                            </li>;
                    })}
                </ul>
            </div>
        )
    
}



export default Section2;