import React, { Component } from 'react'
import '../styles/Header.css';

class Header extends Component {
    constructor(props) {
        super(props)
        
    console.log(props.values)

    this.state=props.values;
    
    
    this.handleClickContact=this.handleClickContact.bind(this);   
    this.handleClickTelephone=this.handleClickTelephone.bind(this);
    }
    handleClickTelephone(){
        console.log('this is:', this.state.telephone);
        let response=prompt("telephone:",this.state.telephone);
        if((response==="")||response===null){
            console.log("here")}
        else{
            this.setState({
                name:this.state.name,
                telephone:response,  
                contact:this.state.contact,
                title:this.state.title, 
                educations:this.state.educations,
                education : this.state.education,                
                experiences:this.state.experiences,
                experience:this.state.experience,
              })
              this.props.values.telephone=response;
        } 
        
       
    };
    handleClickContact (){
        console.log('the email is:', this.state.contact);
        let response=prompt("Email:",this.state.contact)
        if((response==="")||response===null){            
            return;}
        else{                        
            this.setState({
                name:this.state.name,
                telephone:this.state.telephone,  
                contact:response,
                title:this.state.title, 
                educations:this.state.educations,
                education : this.state.education,                
                experiences:this.state.experiences,
                experience:this.state.experience,
                })
                this.props.values.contact=response;    
            
        }
    };

    render() {
        return (
            <div className="Header">
            <div className="telephone">
                <div className="LabelHeader">Tel:</div>
                <div className="dataHeader"><div id="telephone" onClick={this.handleClickTelephone}> {this.props.values.telephone}</div>
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