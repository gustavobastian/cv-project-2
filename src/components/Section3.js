import React, { Component } from 'react'
import '../styles/Section3.css';
import ExperienceElement from './experienceElement';

class Section3 extends Component {
    constructor(props) {
        super(props)        
    }

    handlerDelete= (e)=>{
        console.log("delete "+JSON.stringify(e.target.id));  
        let localId=e.target.id
        
        this.props.handlerDeleteEx(localId);
    };

    render() {
        return (
            <div className="Section3">
            <ul >
            {this.props.experiences.map((experience) => {
                return <li key={experience.id}>
                    <ExperienceElement companyName={experience.companyName} titleName={experience.titleName} dateEntry={experience.dateEntry} dateEnd={experience.dateEnd} Note={experience.note}/>
                    <button id={experience.id} onClick={this.handlerDelete}>Del</button>
                    </li>;
            })}
            </ul>
            </div>
            
        )
    }
}



export default Section3;