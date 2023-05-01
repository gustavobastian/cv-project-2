import React, { Component } from 'react'
import '../styles/Header.css';

class Header extends Component {
    constructor() {
        super()
    }

    

    render() {
        return (
            <div className="Header">
            <div className="telephone">
                <div className="LabelHeader">Tel:</div>
                <div className="dataHeader"> 33-252156421</div>
            </div>   
            <div className="address">
                <div className="LabelHeader">Contact: </div>
                <a href="mailto:Pter@ftam.com.ar" className="dataHeader">  Pter@ftam.com.ar</a>
            </div>
            </div>
        )
    }
}



export default Header;