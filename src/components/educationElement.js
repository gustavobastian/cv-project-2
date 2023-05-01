import React, { Component } from 'react'
import '../styles/educationElement.css';

class educationElement extends Component {
    constructor(props) {
        super(props)
        this.UniversityName=props.university;
        this.title=props.title;
        this.dateEnd=props.dateEnd;
        this.dateEntry=props.dateEntry;
    }
     

    render() {
        return (
            <div>
            <div className="educationElement">            
            <div className="labelEducation">{this.UniversityName}</div>
            <div className="titleEducation"> {this.title}</div>
            <div className="datesEducation"> {this.dateEntry}/{this.dateEnd}</div>
            </div>
            <div className="Note"> Note: {this.props.Note}</div>
            </div>
        )
    }
}



export default educationElement;