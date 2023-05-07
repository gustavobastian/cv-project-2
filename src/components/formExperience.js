import React, {  useState } from 'react'
import '../App.css';
import '../styles/formEducation.css'



const formExperience =(props) => {
    
    const [state,setState]=useState(props.value);

    const handleChangeExComp = (e) => {      
        setState({
          experience: {
            companyName:e.target.value,            
            titleName:state.titleName,            
            dateEntry:state.dateEntry,            
            dateEnd:state.dateEnd,
            note:state.experience.note,
            id:state.experience.id,
          },
        });      
        
      };
      const handleChangeExTit = (e) => {      
        setState({
          experience: {            
            companyName:state.experience.companyName,
            titleName:e.target.value,            
            dateEntry:state.dateEntry,            
            dateEnd:state.dateEnd,
            note:state.experience.note,
            id:state.experience.id,
            },
        });      
        
      };
      const handleChangeExStart = (e) => { 
        console.log(e.target.value)     
        setState({
          experience:{            
            companyName:state.experience.companyName,
            titleName:state.experience.titleName,
            dateEntry:e.target.value,            
            dateEnd:state.dateEnd,
            note:state.experience.note,
            id:state.experience.id,
          },  
        });      
        
      };
      const handleChangeExEnd= (e) => {      
        console.log(e.target.value)
        setState({        
          experience:{
            companyName:state.experience.companyName,
            titleName:state.experience.titleName,
            dateEntry:state.experience.dateEntry,
            dateEnd:e.target.value,
            note:state.experience.note,
            id:state.experience.id,
          },  
        });      
        
      };
      const handleChangeExNote= (e) => {      
        setState({        
          experience:{
            companyName:state.experience.companyName,
            titleName:state.experience.titleName,
            dateEntry:state.experience.dateEntry,
            dateEnd:state.experience.dateEnd,
            note:e.target.value,
            id:state.experience.id,
          },  
        });      
        
      };
  
      const handleCancelExForm=()=>{
        props.handlerCancelEx();
      }
      const onSubmitTaskEx=()=>{
        props.handlerAddEx(state.experience);
      }
    
        return (
            <div>
            <div className='formBox' >                               
                  <div className='line1'>
                    <label htmlFor="CompanyInput">Company</label>
                    <input type="text" id="CompanyInput" onChange={(event)=>{handleChangeExComp(event)}} placeholder="Company"/>                    
                    <label  htmlFor="titleInput">Title</label>
                    <input type="text" id="titleInput" onChange={(event)=>{handleChangeExTit(event)}}  placeholder="title"/>
                    </div>
                    <div className='line1'>
                    <label htmlFor="entryInput2" >Start</label>
                    <input type="text" id="entryInput2"  onChange={(event)=>{handleChangeExStart(event)}} placeholder="2000"/>
                    <label htmlFor="endInput2">End</label>
                    <input type="text" id="endInput2" onChange={(event)=>{handleChangeExEnd(event)}} placeholder="2002"/>
                    </div>
                    <div className='line1'>
                    <label htmlFor="noteInput2">Note</label>
                    <textarea rows="5" columns="50" id="noteInput2" placeholder="Something done"  onChange={(event)=>{handleChangeExNote(event)}}/>
                    </div>                    
                    <div className='buttonsLine'>
                    <button type="button" onClick={(event)=>{onSubmitTaskEx()}}>Submit</button>
                    <button type="button" onClick={(event)=>{handleCancelExForm()}}>Cancel</button>
                    
                  </div>           
               </div>   
            </div>
        )
    

};
export default formExperience;