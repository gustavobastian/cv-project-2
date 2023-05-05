import React, { Component } from 'react'
import '../App.css';
import '../styles/formEducation.css'
import uniqid from "uniqid";

class educationElement extends Component {
    constructor(props) {
        super(props)
        

        this.state=this.props.value;

        this.handleCancelEdForm=this.handleCancelEdForm.bind(this);
        this.onSubmitTaskEd=this.onSubmitTaskEd.bind(this);
    }


    handleCancelEdForm(){
        this.props.handlerCancelEd();        
    };


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
          id:uniqid(),
        },
      });      

      this.props.handlerAddEd(this.state.education)
      
    };

    handleChangeUn = (e) => {      
      this.setState({
        education : {
          universityName:e.target.value,          
          title:this.state.education.title,
          dateEnd:this.state.education.dateEnd,
          dateEntry:this.state.education.dateEntry,
          note:this.state.education.note, 
          id:this.state.education.id,
        },
      });            
    };
    handleChangeEdTit = (e) => {      
      this.setState({
        education : {          
          universityName:this.state.education.universityName,          
          title:e.target.value,   
          dateEnd:this.state.education.dateEnd,
          dateEntry:this.state.education.dateEntry,
          note:this.state.education.note,       
          id:this.state.education.id, 
        },
      });           
    };
    handleChangeEdStart = (e) => {      
      this.setState({
        education : {          
          universityName:this.state.education.universityName,          
          title:this.state.education.title,   
          dateEnd:this.state.education.dateEnd,
          dateEntry:e.target.value,
          note:this.state.education.note,      
          id:this.state.education.id,  
        },
      });      
     
    };
    handleChangeEdEnd= (e) => {      
      this.setState({
        education : {          
          universityName:this.state.education.universityName,          
          title:this.state.education.title,   
          dateEnd:e.target.value,
          dateEntry:this.state.education.dateEntry,
          note:this.state.education.note,        
          id:this.state.education.id,
        },
      });      
     
    };
    handleChangeEdNote= (e) => {      
      this.setState({
        education : {          
          universityName:this.state.education.universityName,          
          title:this.state.education.title,   
          dateEnd:this.state.education.dateEnd,
          dateEntry:this.state.education.dateEntry,
          note:e.target.value,        
          id:this.state.education.id,
        },
       
      });     
    
    };
    

    render() {
        return (
            <div>
            <div className='formBox' >             
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
                  <div className='buttonsLine'>
                    <button type="button" onClick={this.onSubmitTaskEd}>Submit</button>
                    <button type="button" onClick={this.handleCancelEdForm}>Cancel</button>
                  </div>           
               </div>   
            </div>
        )
    }
}

export default educationElement;