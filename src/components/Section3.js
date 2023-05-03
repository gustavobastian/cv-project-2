import React, { Component } from 'react'
import '../styles/Section3.css';
import ExperienceElement from './experienceElement';

class Section3 extends Component {
    constructor(props) {
        super(props)        
    }

    render() {
        return (
            <div className="Section3">
            <ul >
            {this.props.experiences.map((experience) => {
                return <li key={experience.id}>
                    <ExperienceElement companyName={experience.companyName} titleName={experience.titleName} dateEntry={experience.dateEntry} dateEnd={experience.dateEnd} Note={experience.note}/>
                    </li>;
            })}
            </ul>
            </div>
            
        )
    }
}



export default Section3;