import React, { Component } from 'react'
import EducationElement from '../components/educationElement';
import '../styles/Section2.css';

class Section2 extends Component {
    constructor(props) {
        super(props)
      console.log(props)
    };
    
    handlerDelete= (e)=>{
        console.log("delete "+JSON.stringify(e.target.id))
    };

    render() {
        return (
            <div className="Section2">            
            <ul >            
            {this.props.educations.map((education) => {
                return <li key={education.id}>
                    <EducationElement university={education.universityName} title={education.title} dateEntry={education.dateEntry} dateEnd={education.dateEnd} Note={education.note}/>
                    <button id={education.id} onClick={this.handlerDelete}>Del</button>
                    
                    </li>;
            })}
            </ul>
            
            </div>
        )
    }
}



export default Section2;