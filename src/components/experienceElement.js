import React, { Component, useState } from 'react'
import '../styles/experienceElement.css';

const experienceElement = (props)=> {
    const [state,setState]= useState({
        companyName:props.companyName,
        titleName:props.titleName,
        dateEntry:props.dateEntry,
        dateEnd:props.dateEnd,
        note:props.Note
    });

    const handleClickDateEnd=()=>{
        let response=prompt("DateEnd:",state.dateEnd);
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

    const handleClickTitleExperience=()=>{
        let response=prompt("TitleName:",state.titleName);
        if((response==="")||response===null){
            console.log("here")}
        else{
            setState({
                titleName:response,
            });
        }        
    };

    const handleClickCompanyExperience=()=>{
        let response=prompt("Company Name:",state.companyName);
        if((response==="")||response===null){
            console.log("here")}
        else{
            setState({
                companyName:response,
            });
        }        
    };

    const handleClickNoteExperience=()=>{
        let response=prompt("Note:",state.note);
        if((response==="")||response===null){
            console.log("here")}
        else{
            setState({
                note:response,
            });
        }        
    };
        return (
            <div>
            <div className="experienceElement">            
            <div className="labelCompany" onClick={handleClickCompanyExperience.bind(this,'')}>{state.companyName}</div>
            <div className="titleExperience" onClick={handleClickTitleExperience.bind(this,'')}> {state.titleName}</div>
            <div className="datesExperience" onClick={handleClickDateEntry.bind(this,'')}>{state.dateEntry}/</div>
            <div className="datesExperience" onClick={handleClickDateEnd.bind(this,'')}>{state.dateEnd}</div>
            </div>
            <div className="Note" onClick={handleClickNoteExperience.bind(this,'')}> Note: {state.note}</div>
            </div>
        )    
}



export default experienceElement;
