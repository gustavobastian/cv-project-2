
import React, { Component } from 'react'
import Header from './components/Header'
import Section1 from './components/Section1';
import Section2 from './components/Section2';
import Section3 from './components/Section3';

class App extends Component {
    constructor() {
        super()
    }

    

    render() {
        return (
          <div>
          <Header />
          <Section1 />
          <Section2 />
          <Section3 />
          </div>
          
          
            
        )
    }
}



export default App;
