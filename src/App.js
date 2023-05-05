import './App.css';
import React, { Component} from 'react'
import Header from './components/Header'
import Section1 from './components/Section1';
import Section2 from './components/Section2';
import Section3 from './components/Section3';
import FormEducation from './components/formEducation'
import FormExperience from './components/formExperience'

import uniqid from "uniqid";


class App extends Component {
    constructor() {
        super()
        
        this.state = {
            showEd:false,
            showEx:false,
            name:"Peter Ivanovic",
            telephone:"44468321",
            contact:"PeterIvanovic@hotmail.com",
            title:"Phd. AstroPhysics ",
            educations:[{
              universityName:"Moon university",
              title:"Periscope engineer",
              dateEnd:"2005",
              dateEntry:"2002",
              note:"first Periscope based on wood.",
              id: uniqid()
            },],
            education:{
              universityName:"Moon university",
              title:"Periscope  engineer",
              dateEnd:"2005",
              dateEntry:"2002",
              note:"first Periscope  based on wood.",
              id: uniqid()
            },
            experiences:[{
              companyName:"My comp",
              titleName:"First job",
              dateEntry:"1999",
              dateEnd:"2001",
              note:"Nothing done well",
              id: uniqid()
            },],
            experience:{
              companyName:"My comp",
              titleName:"First job",
              dateEntry:"1999",
              dateEnd:"2001",
              note:"Nothing done well",
              id: uniqid()
            },
          };

          this.handlerDeleteEd=this.handlerDeleteEd.bind(this);
          this.handlerDeleteEx=this.handleDeleteEx.bind(this);
          this.handlerAddEd=this.handlerAddEd.bind(this);          
          this.setEd=this.setEd.bind(this);
          this.unSetEd=this.unSetEd.bind(this);
          this.handlerCancelEd=this.handlerCancelEd.bind(this);
          this.setEx=this.setEx.bind(this);
          this.unSetEx=this.unSetEx.bind(this);
          this.handlerCancelEx=this.handlerCancelEx.bind(this);
          this.handlerAddEx=this.handlerAddEx.bind(this);          
          

    }

    setEd() {
      this.setState({
        showEd:true,
      });
    };
    unSetEd() {
      this.setState({
        showEd:false,
      });
    };
    setEx() {
      this.setState({
        showEx:true,
      });
    };
    unSetEx() {
      this.setState({
        showEx:false,
      });
    };
        
  /*  onSubmitTaskEx = (e) => {
      if(e!=null)
        {
          e.preventDefault();   
      }else{
        console.log("init");
      };

      this.setState({
        name:this.state.name,
        telephone:this.state.telephone,  
        contact:this.state.contact,
        title:this.state.title, 
        educations: this.state.educations,
        education: this.state.education,
        experiences:this.state.experiences.concat(this.state.experience),
        experience:{
          companyName:"companyName",
          titleName:"titleName",
          dateEntry:"dateEntry",
          dateEnd:"dateEnd",
          note:"Note",
          id:uniqid(),
        }
      });      
      
    };*/

    handlerDeleteEd(e){      
      let arrayAlt=[];      
      this.state.educations.forEach(element => {
            if(element.id===e){
                console.log("found!");
            }
            else{
                arrayAlt.push(element);
            }
        });      
        this.setState({
            educations:arrayAlt,
        })
        console.log(JSON.stringify(arrayAlt))
    }
    
    handleDeleteEx(e){      
      let arrayAlt=[];
      
      this.state.experiences.forEach(element => {
            if(element.id===e){
                console.log("found!");
            }
            else{
                arrayAlt.push(element);
            }
        });      
        this.setState({
          experiences:arrayAlt,
        })
        
    }

    handlerAddEd(e){
      console.log(e)
      this.setState({          
        educations: this.state.educations.concat(e),
        education: { 
          universityName:"university",
          title:"title",
          dateEnd:"dateEnd",
          dateEntry:"dateEntry",
          note:"Note",
          id:uniqid(),
        },
      });
      this.unSetEd();
    }
    handlerCancelEd(W){
      this.unSetEd();
    }
    handlerCancelEx(){
      this.unSetEx();
    }
    handlerAddEx(e){
      this.setState({          
        experiences: this.state.educations.concat(e),        
      });
      this.unSetEx();
    }
    render() {
      const { education, educations, experience, experiences } = this.state;

      return (
        <div>
          <Header values={this.state}/>          
          <Section1   values={this.state}/>
          <div className="educationLine" >
            <p>Education:</p>
            <button className="buttonPlus" 
            onClick={this.setEd}
            >+</button>
          </div>
          <hr className='lineLocal'></hr> 
          <Section2 value={this.state} handlerDeleteEd={this.handlerDeleteEd}/>          
          <div>
          {this.state.showEd && <FormEducation value={this.state} handlerAddEd={this.handlerAddEd} handlerCancelEd={this.handlerCancelEd} />}  
          </div>



          <div className="educationLine">
            <p>Experience:</p> 
            <button className="buttonPlus" onClick={this.setEx}>
              +</button>            
          </div>
          <hr className='lineLocal'></hr>
          <Section3 experiences={experiences} handlerDeleteEx={this.handlerDeleteEx}/>
          <div>
          {this.state.showEx && <FormExperience value={this.state} handlerAddEx={this.handlerAddEx} handlerCancelEx={this.handlerCancelEx} />}  
          </div>
        </div>
            
      )
    }
}



export default App;
