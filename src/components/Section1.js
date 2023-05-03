import React, { Component } from 'react'
import '../styles/Section1.css';
import face from '../assets/face.jpeg'

class Section1 extends Component {
    constructor(props) {
        super(props)
        
        this.state=props.values;
        
        this.handleClickName=this.handleClickName.bind(this);
        this.handleClickTitle=this.handleClickTitle.bind(this);
    }

    
    handleClickName(){
        console.log('this is:', this.name);
        let response=prompt("name:",this.name);
        if((response==="")||response===null){
            return;
        }
        else{            
            this.setState({
                name:response,
                telephone:this.state.telephone,  
                contact:this.state.contact,
                title:this.state.title, 
                educations:this.state.educations,
                education : this.state.education,                
                experiences:this.state.experiences,
                experience:this.state.experience,
              })
              this.props.values.name=response;
        }
    };
    handleClickTitle(){
        console.log('the ocuppation is:', this.state.title);
        let response=prompt("title:",this.state.title)
        if((response==="")||response===null){
            return;
        }
        else{
            this.setState({
                title:response,
            });
            this.setState({
                name:this.state.name,
                telephone:this.state.telephone,  
                contact:this.state.contact,
                title:response, 
                educations:this.state.educations,
                education : this.state.education,                
                experiences:this.state.experiences,
                experience:this.state.experience,
              })
              this.props.values.title=response;
        }
    };

    render() {
        return (
            <div className="Section1">
            <img src={face}   alt="Person Pic" ></img>
            <div className="TitleSection">
                <div className="labelSection1">
                    <div id="namePerson" onClick={this.handleClickName}>{this.state.name}</div>                
                </div>
                <div onClick={this.handleClickTitle}>
                    <div id="titlePerson" className="dataSection1">                 
                    {this.state.title} 
                    </div>
                </div>
            </div>
            </div>
        )
    }
}



export default Section1;