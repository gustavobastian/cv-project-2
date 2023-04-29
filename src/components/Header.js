import React, { Component } from 'react'
import '../styles/Header.css';

class Header extends Component {
    constructor() {
        super()
    }

    

    render() {
        return (
            <div className="Header">
            <div className="Label">Hola</div>
            <div className="data"> World!</div>
            </div>
        )
    }
}



export default Header;