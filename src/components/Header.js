import React, { Component } from 'react'
import '../styles/Header.css';

class Header extends Component {
    constructor() {
        super()
        this.telephone="33-252156421";
        this.contact="Pter@ftam.com.ar";
    }

    
    handleClickTelephone = ()=>{
        console.log('this is:', this.telephone);
        let response=prompt("telephone:",this.telephone);
        if((response==="")||response===null){
            console.log("here")}
        else{
            this.telephone=response;
            let element=document.getElementById('telephone');
            element.innerText=this.telephone;
        }    
    };
    handleClickContact = ()=>{
        console.log('the email is:', this.contact);
        let response=prompt("Email:",this.contact)
        if((response==="")||response===null){
            console.log("here")
            return;}
        else{
            let element=document.getElementById('contact');
            this.contact=response;
            element.innerText=this.contact;
        }
    };

    render() {
        return (
            <div className="Header">
            <div className="telephone">
                <div className="LabelHeader">Tel:</div>
                <div className="dataHeader"><div id="telephone" onClick={this.handleClickTelephone}> {this.telephone}</div>
                </div>
            </div>   
            <div className="address">
                <div className="LabelHeader">Contact: </div>
                <div className="dataHeader"> <div id="contact" onClick={this.handleClickContact}> {this.contact}</div>
                </div>
            </div>
            </div>
        )
    }
}



export default Header;