import React, { Component,useState } from 'react'
import '../styles/educationElement.css';


const educationElement = props=>{
        const [state,setState]= useState({            
            universityName:props.university,
            title:props.title,
            dateEnd:props.dateEnd,
            dateEntry:props.dateEntry,
            note:props.Note,
        })
        

    const handleClickDateEnd=()=>{
        let response=prompt("DateEnd:",this.state.dateEnd);
        if((response==="")||response===null){
            console.log("here")}
        else{
            setState({
                dateEnd:parseInt(response),
            });
        } 
       
    };

    const handleClickDateEntry=()=>{
        let response=prompt("DateEntry:",state.dateEntry);
        if((response==="")||response===null){
            console.log("here")}
        else{
            setState({
                dateEntry:parseInt(response),
            });
        } 
       
    };

    const handleClickNoteEducation=()=>{
        let response=prompt("Note:",state.note);
        if((response==="")||response===null){
            console.log("here")}
        else{
            setState({
                note:response,
            });
        }        
    };

    const handleClickLabelEducation=()=>{
        let response=prompt("University/Company:",state.universityName);
        if((response==="")||response===null){
            console.log("here")}
        else{
            setState({
                universityName:response,
            });
        }        
    };
    const handleClickTitleEducation=()=>{
        let response=prompt("Title/Degree:",state.title);
        if((response==="")||response===null){
            console.log("here")}
        else{
            setState({
                title:response,
            });
        }        
    };

    
        return (
            <div>
            <div className="educationElement">            
            <div className="labelEducation" onClick={handleClickLabelEducation.bind(this,'')}>{state.universityName}</div>
            <div className="titleEducation" onClick={handleClickTitleEducation.bind(this,'')}> {state.title}</div>
            <div className="datesEducation" onClick={handleClickDateEntry.bind(this,'')} > {state.dateEntry}/</div>
            <div className="datesEducation" onClick={handleClickDateEnd.bind(this,'')} >{state.dateEnd}</div>
            </div>
            <div className="Note" onClick={handleClickNoteEducation}> Note: {state.note}</div>

            
            </div>
        )
    
}



export default educationElement;