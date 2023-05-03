import React, { Component } from 'react'
import EducationElement from '../components/educationElement';
import '../styles/Section2.css';

class Section2 extends Component {
    constructor(props) {
        super(props)
      
    }
    

    render() {
        return (
            <div className="Section2">            
            <ul >            
            {this.props.educations.map((education) => {
                return <li key={education.id}>
                    <EducationElement university={education.universityName} title={education.title} dateEntry={education.dateEntry} dateEnd={education.dateEnd} Note={education.note}/>
                    <button>Del</button>
                    </li>;
            })}
            </ul>
            
            </div>
        )
    }
}



export default Section2;