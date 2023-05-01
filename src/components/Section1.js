import React, { Component } from 'react'
import '../styles/Section1.css';
import face from '../assets/face.jpeg'

class Section1 extends Component {
    constructor() {
        super()
    }

    

    render() {
        return (
            <div className="Section1">
            <img src={face}   alt="image" ></img>
            <div className="TitleSection">
                <div className="LabelSection1">Peter Ivanovic</div>
                <div className="dataSection1"> Phd </div>
            </div>
            </div>
        )
    }
}



export default Section1;