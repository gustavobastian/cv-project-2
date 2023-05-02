import './App.css';
import React, { Component } from 'react'
import Header from './components/Header'
import Section1 from './components/Section1';
import Section2 from './components/Section2';
import Section3 from './components/Section3';

class App extends Component {
    constructor() {
        super()

        this.state = {            
            educations:[],
            education:{
              universityName:"Moon university",
              title:"Tactile button engineer",
              dateEnd:"2005",
              dateEntry:"2002",
              note:"first tactile button based on wood.",
            },
            experiences:[],
            experience:{
              companyName:"My comp",
              titleName:"First job",
              dateEntry:"1999",
              dateEnd:"2001",
              note:"Nothing done well"},
          };

      
    }
    async componentDidMount() {
      if(this.state.educations.length===0){
        await this.onSubmitTaskEd();
      }
      if(this.state.experiences.length===0){
      await this.onSubmitTaskEx();      
      }

    }
     onSubmitTaskEd = (e) => {
        if(e!=null){ e.preventDefault();   }
        else{
             console.log("init ed")             
            };
      
      this.setState({        
        educations: this.state.educations.concat(this.state.education),
        education: { 
          universityName:"university",
          title:"title",
          dateEnd:"dateEnd",
          dateEntry:"dateEntry",
          note:"Note", 
        },
        experiences:this.state.experiences,
        experience:this.state.experience,       
      });
      
      console.log("after concat:"+JSON.stringify(this.state.educations));
    };

    handleChangeUn = (e) => {      
      this.setState({
        educations:this.state.educations,
        education : {
          universityName:e.target.value,          
          title:this.state.education.title,
          dateEnd:this.state.education.dateEnd,
          dateEntry:this.state.education.dateEntry,
          note:this.state.education.note, 
          
        },
        experiences:this.state.experiences,
        experience:this.state.experience,       
      });            
    };
    handleChangeEdTit = (e) => {      
      this.setState({
        educations:this.state.educations,
        education : {          
          universityName:this.state.education.universityName,          
          title:e.target.value,   
          dateEnd:this.state.education.dateEnd,
          dateEntry:this.state.education.dateEntry,
          note:this.state.education.note,        
        },
        experiences:this.state.experiences,
        experience:this.state.experience,  
      });           
    };
    handleChangeEdStart = (e) => {      
      this.setState({
        educations:this.state.educations,
        education : {          
          universityName:this.state.education.universityName,          
          title:this.state.education.title,   
          dateEnd:this.state.education.dateEnd,
          dateEntry:e.target.value,
          note:this.state.education.note,        
        },
        experiences:this.state.experiences,
        experience:this.state.experience,  
      });      
     
    };
    handleChangeEdEnd= (e) => {      
      this.setState({
        educations:this.state.educations,
        education : {          
          universityName:this.state.education.universityName,          
          title:this.state.education.title,   
          dateEnd:e.target.value,
          dateEntry:this.state.education.dateEntry,
          note:this.state.education.note,        
        },
        experiences:this.state.experiences,
        experience:this.state.experience,  
      });      
     
    };
    handleChangeEdNote= (e) => {      
      this.setState({
        educations:this.state.educations,
        education : {          
          universityName:this.state.education.universityName,          
          title:this.state.education.title,   
          dateEnd:this.state.education.dateEnd,
          dateEntry:this.state.education.dateEntry,
          note:e.target.value,        
        },
        experiences:this.state.experiences,
        experience:this.state.experience,  
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
        educations: this.state.educations,
        education: this.state.education,
        experiences:this.state.experiences.concat(this.state.experience),
        experience:{
          companyName:"companyName",
          titleName:"titleName",
          dateEntry:"dateEntry",
          dateEnd:"dateEnd",
          note:"Note"
        }
      });
      console.log("here:"+JSON.stringify(this.state.experiences));
    };

    handleChangeExComp = (e) => {      
      this.setState({
        educations:this.state.educations,
        education : this.state.education,
        experiences:this.state.experiences,
        experience: {
          companyName:e.target.value,
          titleName:this.state.experience.titleName,
          dateEntry:this.state.experience.dateEntry,
          dateEnd:this.state.experience.dateEnd,
          note:this.state.experience.note},
      });      
      console.log(JSON.stringify(this.state.education))
    };
    handleChangeExTit = (e) => {      
      this.setState({
        educations:this.state.educations,
        education : this.state.education,
        experiences:this.state.experiences,
        experience: {
          companyName:this.state.experience.companyName,
          titleName:e.target.value,
          dateEntry:this.state.experience.dateEntry,
          dateEnd:this.state.experience.dateEnd,
          note:this.state.experience.note},
      });      
      console.log(JSON.stringify(this.state.education))
    };
    handleChangeExStart = (e) => {      
      this.setState({
        educations:this.state.educations,
        education : this.state.education,
        experiences:this.state.experiences,
        experience:{
          companyName:this.state.experience.companyName,
          titleName:this.state.experience.titleName,
          dateEntry:e.target.value,
          dateEnd:this.state.experience.dateEnd,
          note:this.state.experience.note},  
      });      
      console.log(JSON.stringify(this.state.education))
    };
    handleChangeExEnd= (e) => {      
      this.setState({
        educations:this.state.educations,
        education : this.state.education,                
        experiences:this.state.experiences,
        experience:{
          companyName:this.state.experience.companyName,
          titleName:this.state.experience.titleName,
          dateEntry:this.state.experience.dateEntry,
          dateEnd:e.target.value,
          note:this.state.experience.note},  
      });      
      console.log(JSON.stringify(this.state.education))
    };
    handleChangeExNote= (e) => {      
      this.setState({
        educations:this.state.educations,
        education :  this.state.education, 
        experiences:this.state.experiences,
        experience:{
          companyName:this.state.experience.companyName,
          titleName:this.state.experience.titleName,
          dateEntry:this.state.experience.dateEntry,
          dateEnd:this.state.experience.dateEnd,
          note:e.target.value},  
      });      
      console.log(JSON.stringify(this.state.education))
    };



    render() {
      const { education, educations, experience, experiences } = this.state;

        return (
          <div>
          <Header />
          <Section1 />
          <Section2 educations={educations}/>
          <Section3 experiences={experiences}/>
          
          <form id="education">
          
                <div className='myForm' >
                <hr></hr>  
                    <div className='line1'>
                    <label htmlFor="UniversityInput">University</label>
                    <input type="text" id="UniversityInput" onChange={this.handleChangeUn} placeholder="university"/>                    
                    <label  htmlFor="titleInput">Title</label>
                    <input type="text" id="titleInput" onChange={this.handleChangeEdTit}  placeholder="title/degree"/>
                    </div>
                    <div className='line1'>
                    <label htmlFor="entryInput" >Start</label>
                    <input type="text" id="entryInput"  onChange={this.handleChangeEdStart} placeholder="2000"/>
                    <label htmlFor="endInput">End</label>
                    <input type="text" id="endInput" onChange={this.handleChangeEdEnd} placeholder="2002"/>
                    </div>
                    <div className='line1'>
                    <label htmlFor="noteInput">Note</label>
                    <textarea rows="5" columns="50" id="noteInput" placeholder="Something done"  onChange={this.handleChangeEdNote}/>
                    </div>  
                    <div>
                      <button type="button" onClick={this.onSubmitTaskEd}>Add Education</button>
                      <button type="button" onClick={this.onSubmitTaskEd}>Hide</button>
                    </div>                  
                </div>
          </form>  
          
          <form id="experience">
          <hr></hr>
                <div className='myForm' >
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
                    <button type="button" onClick={this.onSubmitTaskEx}>Add Experience</button>
                </div>
          </form>  

          
          </div>
          
          
            
        )
    }
}



export default App;
