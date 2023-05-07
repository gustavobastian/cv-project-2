import './App.css';
import React, { useState,useEffect} from 'react'
import Header from './components/Header'
import Section1 from './components/Section1';
import Section2 from './components/Section2';
import Section3 from './components/Section3';
import FormEducation from './components/formEducation'
import FormExperience from './components/formExperience'

import uniqid from "uniqid";


const  App = () => {    
    const [state, setState]=useState({
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
    })
        

    const setEd=() => {
      setState({
        showEd:true,
        showEx:false,
        name:state.name,
        telephone:state.telephone,
        contact:state.contact,
        title:state.title,
        educations:state.educations,
        education:{
          universityName:"Moon university",
          title:"Periscope  engineer",
          dateEnd:"2005",
          dateEntry:"2002",
          note:"first Periscope  based on wood.",
          id: uniqid()
        },
        experiences:state.experiences,
        experience:state.experience,
       });
    };
    const unSetEd=() => {
      setState({
        showEd:false,
        showEx:false,
        name:state.name,
        telephone:state.telephone,
        contact:state.contact,
        title:state.title,
        educations:state.educations,
        education:state.education,
        experiences:state.experiences,
        experience:state.experience,
      });
    };
    const setEx = ()=> {
      setState({
        showEd:false,
        showEx:true,        
        name:state.name,
        telephone:state.telephone,
        contact:state.contact,
        title:state.title,
        educations:state.educations,
        education:state.education,
        experiences:state.experiences,
        experience:{
          companyName:"My comp",
          titleName:"First job",
          dateEntry:"1999",
          dateEnd:"2001",
          note:"Nothing done well",
          id: uniqid()
        },
      });
    };
    const unSetEx= () => {
      console.log("removing ed view")
      setState({        
        showEd:false,
        showEx:false,
        name:state.name,
        telephone:state.telephone,
        contact:state.contact,
        title:state.title,
        educations:state.educations,
        education:state.education,
        experiences:state.experiences,
        experience:state.experience,
      });
    };

    const handlerDeleteEd= (e)=>{      
      let arrayAlt=[];      
      state.educations.forEach(element => {
            if(element.id===e){
                console.log("found!");
            }
            else{
                arrayAlt.push(element);
            }
        });      
        setState({
            showEd:false,
            showEx:false,
            name:state.name,
            telephone:state.telephone,
            contact:state.contact,
            title:state.title,
            educations:arrayAlt,
            education:state.education,
            experiences:state.experiences,
            experience:state.experience,
        })
        console.log(JSON.stringify(state.educations))
    };
    
    const handlerDeleteEx=(e)=>{      
      let arrayAlt=[];
      console.log(e)
      state.experiences.forEach(element => {
            if(element.id===e){
                console.log("found!");
            }
            else{
                arrayAlt.push(element);
            }
        });      
        setState({
          showEd:false,
          showEx:false,
          name:state.name,
          telephone:state.telephone,
          contact:state.contact,
          title:state.title,
          educations:state.educations,
          education:state.education,
          experiences:arrayAlt,
          experience:state.experience,
        })
        
    };

    const handlerAddEd= (e) =>{
      console.log(e)
      setState({          
        showEd:false,
        showEx:false,
        name:state.name,
        telephone:state.telephone,
        contact:state.contact,
        title:state.title,
        educations: state.educations.concat(e),
        education: { 
          universityName:"university",
          title:"title",
          dateEnd:"dateEnd",
          dateEntry:"dateEntry",
          note:"Note",
          id:uniqid(),
        },
        experiences:state.experiences,
        experience:state.experience,
      });
      
    };
    const handlerCancelEd = (W) =>{
      unSetEd();
    };
    const handlerCancelEx=()=>{
      unSetEx();
    };

    const handlerAddEx= async (e)=>{
      console.log("adding experience:"+JSON.stringify(e))
      console.log("prev:"+state.contact.experiences)
      let value= await state.experiences.concat(e);
      console.log("value+"+JSON.stringify(value))
      setState({
        showEd: false,
        showEx: false,
        name: state.name,
        telephone: state.telephone,
        contact: state.contact,
        title: state.title,
        educations: state.educations,
        education: state.educations,
        experiences: value,
        experience: state.experience,
      });
      
    };    
    
    useEffect(()=>{
      console.log("altered")
      let component=document.getElementById("section2");
      console.log(component)
    },[state.educations]);
    

    useEffect(()=>{
      console.log("altered")
      let component=document.getElementById("section3");
      console.log(component)
    },[state.experiences]);

    return (
      <div>
        <Header values={state}/>          
        <Section1   values={state}/>
        <div className="educationLine" >
          <p>Education:</p>
          <button className="buttonPlus" 
          onClick={setEd.bind(this,'')}
          >+</button>
        </div>
        <hr className='lineLocal'></hr> 
        <Section2 id="section2" value={state} handlerDeleteEd={(event)=>{handlerDeleteEd(event)}}/>          
        <div>
        {state.showEd && <FormEducation value={state} handlerAddEd={(value)=>{handlerAddEd(value)}} handlerCancelEd={(event)=>{handlerCancelEd(event)}} />}  
        </div>



        <div className="educationLine">
          <p>Experience:</p> 
          <button className="buttonPlus" onClick={setEx.bind(this,'')}>
            +</button>            
        </div>
        <hr className='lineLocal'></hr>
        <Section3 id="section3" value={state} handlerDeleteEx={(event)=>{handlerDeleteEx(event)}}/>
        <div>
        {state.showEx && <FormExperience value={state} handlerAddEx={(event)=>{handlerAddEx(event)}} handlerCancelEx={(event)=>{handlerCancelEx()}} />}  
        </div>
      </div>
          
    )

}



export default App;
