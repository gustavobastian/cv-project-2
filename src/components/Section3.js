import React, { Component } from 'react'
import '../styles/Section3.css';
import ExperienceElement from './experienceElement';
import { FaTrashAlt} from 'react-icons/fa';


class Section3 extends Component {
    constructor(props) {
        super(props)        
        this.handlerDelete=this.handlerDelete.bind(this);
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
                    <FaTrashAlt id={experience.id} onClick={this.handlerDelete} className='deleteButton'>Del</FaTrashAlt>
                    </li>;
            })}
            </ul>
            </div>
            
        )
    }
}



export default Section3;