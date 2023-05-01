import React, { Component } from 'react'
import EducationElement from '../components/educationElement';
import '../styles/Section2.css';

class Section2 extends Component {
    constructor() {
        super()
    }
    

    render() {
        return (
            <div className="Section2">
            <div className="educationLine">Education:</div>
            <hr></hr>
            <ul >
            <li><EducationElement university="UCLA" title="IoT Specialist" dateEntry="2019" dateEnd="2022" Note="Published paper 'Alo'" /></li>
            <li><EducationElement university="MIT" title="Embedded Specialist" dateEntry="2015" dateEnd="2018" Note="Working on Skynet operation's robots project."/></li>
            <li><EducationElement university="Harvard" title="Artificial Intelligence Specialist" dateEntry="2011" dateEnd="2012" Note="Best qualifications of the year 2011."/></li>
            <li><EducationElement university="Stanford" title="Machine Learning Specialist" dateEntry="2009" dateEnd="2011" Note="Published paper 'Elo'"/></li>
            </ul>
            </div>
        )
    }
}



export default Section2;