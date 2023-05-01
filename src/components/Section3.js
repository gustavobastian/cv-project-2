import React, { Component } from 'react'
import '../styles/Section3.css';
import ExperienceElement from './experienceElement';

class Section3 extends Component {
    constructor() {
        super()
    }

    

    render() {
        return (
            <div className="Section3">

            <div className="experienceLine">Experience:</div>
            <hr></hr>
            
            <ul >
            <li><ExperienceElement companyName="MyComp" titleName="Game programmer" dateEntry="2007" dateEnd="2008" Note="Game Minippoo development" /></li>
            <li><ExperienceElement companyName="MyComp2" titleName="Game programmer" dateEntry="2007" dateEnd="2008" Note="Game Minippoo development" /></li>
            </ul>
            </div>
            
        )
    }
}



export default Section3;