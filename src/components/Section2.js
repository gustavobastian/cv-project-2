import React, { Component } from 'react'
import EducationElement from '../components/educationElement';
import '../styles/Section2.css';
import { FaTrashAlt} from 'react-icons/fa';

class Section2 extends Component {
    constructor(props) {
        super(props)

      this.state= props.value;
      
      this.handlerDelete=this.handlerDelete.bind(this);
    };
    
    handlerDelete= (e)=>{
        console.log("delete "+JSON.stringify(e.target.id));  
        let localId=e.target.id;        
        this.props.handlerDeleteEd(localId);
    };

    render() {
        return (
            <div className="Section2">            
            <ul >            
            {this.props.value.educations.map((education) => {
                return <li key={education.id} className='lineItem'>
                    <EducationElement university={education.universityName} title={education.title} dateEntry={education.dateEntry} dateEnd={education.dateEnd} Note={education.note}/>
                    <FaTrashAlt id={education.id} onClick={this.handlerDelete} className='deleteButton'>Del</FaTrashAlt>
                    
                    </li>;
            })}
            </ul>
            
            </div>
        )
    }
}



export default Section2;