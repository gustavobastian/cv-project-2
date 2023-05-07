import React, { Component ,useState} from 'react'
import '../App.css';
import '../styles/formEducation.css'
import uniqid from "uniqid";

const formEducation = (props)=>{
    
    
    const [state,setState]= useState(props.value);

    console.log((state))
    /*    this.state=this.props.value;

        this.handleCancelEdForm=this.handleCancelEdForm.bind(this);
        this.onSubmitTaskEd=this.onSubmitTaskEd.bind(this);*/
    


    const handleCancelEdForm=()=>{
        props.handlerCancelEd();        
    };


    const onSubmitTaskEd = (e) => {
        if(e!=null){ e.preventDefault();   }
        else{
             console.log("init ed")             
            };
      props.handlerAddEd(state.education)
      
    };

    const handleChangeUn = (e) => {          
      setState({
        education : {
          universityName:e.target.value,          
          title:state.education.title,
          dateEnd:state.education.dateEnd,
          dateEntry:state.education.dateEntry,
          note:state.education.note, 
          id:state.education.id,
        },
      }); 
    };

    const handleChangeEdTit = (e) => {      
      setState({
        education : {          
          universityName:state.education.universityName,          
          title:e.target.value,   
          dateEnd:state.education.dateEnd,
          dateEntry:state.education.dateEntry,
          note:state.education.note,       
          id:state.education.id, 
        },
      });           
    };

    const handleChangeEdStart = (e) => {      
      setState({
        education : {          
          universityName:state.education.universityName,          
          title:state.education.title,   
          dateEnd:state.education.dateEnd,
          dateEntry:e.target.value,
          note:state.education.note,      
          id:state.education.id,  
        },
      });      
     
    };
    const handleChangeEdEnd= (e) => {      
      setState({
        education : {          
          universityName:state.education.universityName,          
          title:state.education.title,   
          dateEnd:e.target.value,
          dateEntry:state.education.dateEntry,
          note:state.education.note,        
          id:state.education.id,
        },
      });      
     
    };
    const handleChangeEdNote= (e) => {      
      setState({
        education : {          
          universityName:state.education.universityName,          
          title:state.education.title,   
          dateEnd:state.education.dateEnd,
          dateEntry:state.education.dateEntry,
          note:e.target.value,        
          id:state.education.id,
        },
      });     
    
    };
    

    
        return (
            <div>
            <div className='formBox' >             
                  <div className='line1'>
                  <label htmlFor="UniversityInput">University</label>
                  <input type="text" id="UniversityInput" onChange={(event)=>{handleChangeUn(event)}} placeholder="university"/>                    
                  <label  htmlFor="titleInput">Title</label>
                  <input type="text" id="titleInput" onChange={(event)=>{handleChangeEdTit.bind(event)}}  placeholder="title/degree"/>
                  </div>
                  <div className='line1'>
                  <label htmlFor="entryInput" >Start</label>
                  <input type="text" id="entryInput"  onChange={(event)=>{handleChangeEdStart(event)}} placeholder="2000"/>
                  <label htmlFor="endInput">End</label>
                  <input type="text" id="endInput" onChange={(event)=>{handleChangeEdEnd(event)}} placeholder="2002"/>
                  </div>
                  <div className='line1'>
                  <label htmlFor="noteInput">Note</label>
                  <textarea rows="5" columns="50" id="noteInput" placeholder="Something done"  onChange={(event)=>{handleChangeEdNote(event)}}/>
                  </div>  
                  <div className='buttonsLine'>
                    <button type="button" onClick={(event)=>{onSubmitTaskEd(event)}}>Submit</button>
                    <button type="button" onClick={(event)=>{handleCancelEdForm(event)}}>Cancel</button>
                  </div>           
               </div>   
            </div>
        )
    
}

export default formEducation;