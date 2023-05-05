import './App.css';
import React, { Component} from 'react'
import Header from './components/Header'
import Section1 from './components/Section1';
import Section2 from './components/Section2';
import Section3 from './components/Section3';
import FormEducation from './components/formEducation'
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
              title:"Tactile button engineer",
              dateEnd:"2005",
              dateEntry:"2002",
              note:"first tactile button based on wood.",
              id: uniqid()
            },],
            education:{
              universityName:"Moon university",
              title:"Tactile button engineer",
              dateEnd:"2005",
              dateEntry:"2002",
              note:"first tactile button based on wood.",
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
    
        
    onSubmitTaskEx = (e) => {
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
      
      let ElementD=document.getElementById("experienceForm")
      ElementD.style.visibility = "hidden"
    };

    handleChangeExComp = (e) => {      
      this.setState({
        experience: {
          companyName:e.target.value,
          titleName:this.state.experience.titleName,
          dateEntry:this.state.experience.dateEntry,
          dateEnd:this.state.experience.dateEnd,
          note:this.state.experience.note,
          id:this.state.experience.id,
        },
      });      
      
    };
    handleChangeExTit = (e) => {      
      this.setState({
        experience: {
          companyName:this.state.experience.companyName,
          titleName:e.target.value,
          dateEntry:this.state.experience.dateEntry,
          dateEnd:this.state.experience.dateEnd,
          note:this.state.experience.note,
          id:this.state.experience.id
          },
      });      
      
    };
    handleChangeExStart = (e) => {      
      this.setState({
        experience:{
          companyName:this.state.experience.companyName,
          titleName:this.state.experience.titleName,
          dateEntry:e.target.value,
          dateEnd:this.state.experience.dateEnd,
          note:this.state.experience.note,
          id:this.state.experience.id,
        },  
      });      
      
    };
    handleChangeExEnd= (e) => {      
      this.setState({        
        experience:{
          companyName:this.state.experience.companyName,
          titleName:this.state.experience.titleName,
          dateEntry:this.state.experience.dateEntry,
          dateEnd:e.target.value,
          note:this.state.experience.note,
          id:this.state.experience.id,
        },  
      });      
      
    };
    handleChangeExNote= (e) => {      
      this.setState({        
        experience:{
          companyName:this.state.experience.companyName,
          titleName:this.state.experience.titleName,
          dateEntry:this.state.experience.dateEntry,
          dateEnd:this.state.experience.dateEnd,
          note:e.target.value,
          id:this.state.experience.id,
        },  
      });      
      
    };

    handleChangeEdForm= (e) => {              
      console.log("need more education");
      this.setState({
        name:this.state.name,
        telephone:this.state.telephone,  
        contact:this.state.contact,
        title:this.state.title, 
        educations:this.state.educations,
        education : this.state.education,                
        experiences:this.state.experiences,
        experience:this.state.experience,  
      });    
      
      
    };
    handleChangeExForm= (e) => {              
      console.log("need more experience");
      let ElementD=document.getElementById("experienceForm")
      ElementD.style.visibility = "";
    };
    handleCancelExForm= (e) => {              
      console.log("need more experience");
      let ElementD=document.getElementById("experienceForm")
      ElementD.style.visibility = "hidden";
    };
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
          
          <div className="educationLine">
            <p>Experience:</p> 
            <button className="buttonPlus" onClick={this.handleChangeExForm}>
              +</button>
            
          </div>
          <hr className='lineLocal'></hr>
          <Section3 experiences={experiences} handlerDeleteEx={this.handlerDeleteEx}/>
          
          
          <form id="experienceForm">
          
            <div className='myForm' >
                <hr></hr>
                    <div className='line1'>
                    <label htmlFor="CompanyInput">Company</label>
                    <input type="text" id="CompanyInput" onChange={this.handleChangeExComp} placeholder="Company"/>                    
                    <label  htmlFor="titleInput">Title</label>
                    <input type="text" id="titleInput" onChange={this.handleChangeExTit}  placeholder="title"/>
                    </div>
                    <div className='line1'>
                    <label htmlFor="entryInput2" >Start</label>
                    <input type="text" id="entryInput2"  onChange={this.handleChangeExStart} placeholder="2000"/>
                    <label htmlFor="endInput2">End</label>
                    <input type="text" id="endInput2" onChange={this.handleChangeExEnd} placeholder="2002"/>
                    </div>
                    <div className='line1'>
                    <label htmlFor="noteInput2">Note</label>
                    <textarea rows="5" columns="50" id="noteInput2" placeholder="Something done"  onChange={this.handleChangeExNote}/>
                    </div>                    
                    <div className='buttonsLine'>
                    <button type="button" onClick={this.onSubmitTaskEx}>Submit</button>
                    <button type="button" onClick={this.handleCancelExForm}>Cancel</button>
                    </div>
            </div>
          </form>
          {this.state.showEd && <FormEducation value={this.state} handlerAddEd={this.handlerAddEd} handlerCancelEd={this.handlerCancelEd} />}  
          </div>
            
        )
    }
}



export default App;
