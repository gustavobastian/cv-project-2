import React, { Component } from 'react'
import '../styles/educationElement.css';

class educationElement extends Component {
    constructor(props) {
        super(props)
        

        this.state={            
            universityName:props.university,
            title:props.title,
            dateEnd:props.dateEnd,
            dateEntry:props.dateEntry,
            note:props.Note,

        }

        this.handleClickNoteEducation=this.handleClickNoteEducation.bind(this);
        this.handleClickLabelEducation=this.handleClickLabelEducation.bind(this);
        this.handleClickTitleEducation=this.handleClickTitleEducation.bind(this);
        this.handleClickDateEntry=this.handleClickDateEntry.bind(this);
        this.handleClickDateEnd=this.handleClickDateEnd.bind(this);

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

    handleClickNoteEducation(){
        let response=prompt("Note:",this.state.note);
        if((response==="")||response===null){
            console.log("here")}
        else{
            this.setState({
                note:response,
            });
        }        
    };

    handleClickLabelEducation(){
        let response=prompt("University/Company:",this.state.universityName);
        if((response==="")||response===null){
            console.log("here")}
        else{
            this.setState({
                universityName:response,
            });
        }        
    };
    handleClickTitleEducation(){
        let response=prompt("Title/Degree:",this.state.title);
        if((response==="")||response===null){
            console.log("here")}
        else{
            this.setState({
                title:response,
            });
        }        
    };

    render() {
        return (
            <div>
            <div className="educationElement">            
            <div className="labelEducation" onClick={this.handleClickLabelEducation}>{this.state.universityName}</div>
            <div className="titleEducation" onClick={this.handleClickTitleEducation}> {this.state.title}</div>
            <div className="datesEducation" onClick={this.handleClickDateEntry} > {this.state.dateEntry}/</div>
            <div className="datesEducation" onClick={this.handleClickDateEnd} >{this.state.dateEnd}</div>
            </div>
            <div className="Note" onClick={this.handleClickNoteEducation}> Note: {this.state.note}</div>

            
            </div>
        )
    }
}



export default educationElement;