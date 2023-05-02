import React, { Component } from 'react'
import '../styles/Header.css';

class Header extends Component {
    constructor() {
        super()
        
    

    this.state={
        telephone:"33-252156421",
        contact:"Pter@ftam.com.ar"
    };
    this.handleClickContact=this.handleClickContact.bind(this);   
    this.handleClickTelephone=this.handleClickTelephone.bind(this);
    }
    handleClickTelephone(){
        console.log('this is:', this.telephone);
        let response=prompt("telephone:",this.telephone);
        if((response==="")||response===null){
            console.log("here")}
        else{
            this.setState({
                telephone:response,
            });
        } 
       
    };
    handleClickContact (){
        console.log('the email is:', this.contact);
        let response=prompt("Email:",this.contact)
        if((response==="")||response===null){
            console.log("here")
            return;}
        else{            
            this.setState({
                contact:response,
                });
            
        }
    };

    render() {
        return (
            <div className="Header">
            <div className="telephone">
                <div className="LabelHeader">Tel:</div>
                <div className="dataHeader"><div id="telephone" onClick={this.handleClickTelephone}> {this.state.telephone}</div>
                </div>
            </div>   
            <div className="address">
                <div className="LabelHeader">Contact: </div>
                <div className="dataHeader"> <div id="contact" onClick={this.handleClickContact}> {this.state.contact}</div>
                </div>
            </div>
            </div>
        )
    }
}



export default Header;