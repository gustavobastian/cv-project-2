import React, { Component } from 'react'
import '../App.css';
import '../styles/formEducation.css'



class formExperience extends Component {
    constructor(props) {
        super(props)
        

        this.state=this.props.value;

        this.handleCancelExForm=this.handleCancelExForm.bind(this);
        this.onSubmitTaskEx=this.onSubmitTaskEx.bind(this);
    }


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
  
      handleCancelExForm(){
        this.props.handlerCancelEx();
      }
      onSubmitTaskEx(){
        this.props.handlerAddEx(this.state.experience);
      }
    render() {
        return (
            <div>
            <div className='formBox' >                               
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
            </div>
        )
    }

};
export default formExperience;