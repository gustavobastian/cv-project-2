import React, { Component } from 'react'
import '../styles/Section1.css';
import face from '../assets/face.jpeg'

class Section1 extends Component {
    constructor() {
        super()
        this.name="Peter Ivanovic";
        this.title="Phd. AstroPhysics";
    }

    
    handleClickName = ()=>{
        console.log('this is:', this.name);
        let response=prompt("name:",this.name);
        if(response===""){
            return;
        }
        this.name=response;
        let element=document.getElementById('namePerson');
        element.innerText=this.name;
    };
    handleClickTitle = ()=>{
        console.log('the ocuppation is:', this.title);
        let response=prompt("title:",this.title)
        if(response===""){
            return;
        }
        this.title=response;
        let element=document.getElementById('titlePerson');
        element.innerText=this.title;
    };

    render() {
        return (
            <div className="Section1">
            <img src={face}   alt="Person Pic" ></img>
            <div className="TitleSection">
                <div className="labelSection1">
                    <div id="namePerson" onClick={this.handleClickName}>{this.name}</div>                
                </div>
                <div onClick={this.handleClickTitle}>
                    <div id="titlePerson" className="dataSection1">                 
                    {this.title} 
                    </div>
                </div>
            </div>
            </div>
        )
    }
}



export default Section1;