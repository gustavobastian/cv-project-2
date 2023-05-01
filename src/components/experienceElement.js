import React, { Component } from 'react'
import '../styles/experienceElement.css';

class experienceElement extends Component {
    constructor(props) {
        super(props)
        
    }
     

    render() {
        return (
            <div>
            <div className="experienceElement">            
            <div className="labelCompany">{this.props.companyName}</div>
            <div className="titleExperience"> {this.props.titleName}</div>
            <div className="datesExperience"> {this.props.dateEntry}/{this.props.dateEnd}</div>
            </div>
            <div className="Note"> Note: {this.props.Note}</div>
            </div>
        )
    }
}



export default experienceElement;