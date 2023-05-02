import React, { Component } from 'react'
import '../styles/Section1.css';
import face from '../assets/face.jpeg'

class Section1 extends Component {
    constructor() {
        super()
        

        this.state={
            name:"Peter Ivanovic",
            title:"Phd. AstroPhysics",
        };
    }

    
    handleClickName = ()=>{
        console.log('this is:', this.name);
        let response=prompt("name:",this.name);
        if((response==="")||response===null){
            return;
        }
        else{
            this.setState({
                name:response,
            })        
        }
    };
    handleClickTitle = ()=>{
        console.log('the ocuppation is:', this.title);
        let response=prompt("title:",this.title)
        if((response==="")||response===null){
            return;
        }
        else{
            this.setState({
                title:response,
            });
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