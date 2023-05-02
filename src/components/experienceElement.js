import React, { Component } from 'react'
import '../styles/experienceElement.css';

class experienceElement extends Component {
    constructor(props) {
        super(props)

        this.state={
            companyName:props.companyName,
            titleName:props.titleName,
            dateEntry:props.dateEntry,
            dateEnd:props.dateEnd,
            note:props.Note
        };

        this.handleClickDateEnd=this.handleClickDateEnd.bind(this);
        this.handleClickDateEntry=this.handleClickDateEntry.bind(this);
        this.handleClickTitleExperience=this.handleClickTitleExperience.bind(this);
        this.handleClickCompanyExperience=this.handleClickCompanyExperience.bind(this);
        this.handleClickNoteExperience=this.handleClickNoteExperience.bind(this);
        
    }     
    handleClickDateEnd(){
        let response=prompt("DateEnd:",this.state.dateEnd);
        if((response==="")||response===null){
            console.log("here")}
        else{
            this.setState({
                dateEnd:parseInt(response),
            });
        } 
       
    };

    handleClickDateEntry(){
        let response=prompt("DateEntry:",this.state.dateEntry);
        if((response==="")||response===null){
            console.log("here")}
        else{
            this.setState({
                dateEntry:parseInt(response),
            });
        } 
       
    };

    handleClickTitleExperience(){
        let response=prompt("TitleName:",this.state.titleName);
        if((response==="")||response===null){
            console.log("here")}
        else{
            this.setState({
                titleName:response,
            });
        }        
    };

    handleClickCompanyExperience(){
        let response=prompt("Company Name:",this.state.companyName);
        if((response==="")||response===null){
            console.log("here")}
        else{
            this.setState({
                companyName:response,
            });
        }        
    };

    handleClickNoteExperience(){
        let response=prompt("Note:",this.state.note);
        if((response==="")||response===null){
            console.log("here")}
        else{
            this.setState({
                note:response,
            });
        }        
    };


    render() {
        return (
            <div>
            <div className="experienceElement">            
            <div className="labelCompany" onClick={this.handleClickCompanyExperience}>{this.state.companyName}</div>
            <div className="titleExperience" onClick={this.handleClickTitleExperience}> {this.state.titleName}</div>
            <div className="datesExperience" onClick={this.handleClickDateEntry}>{this.state.dateEntry}/</div>
            <div className="datesExperience" onClick={this.handleClickDateEnd}>{this.state.dateEnd}</div>
            </div>
            <div className="Note" onClick={this.handleClickNoteExperience}> Note: {this.state.note}</div>
            </div>
        )
    }
}



export default experienceElement;
