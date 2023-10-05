import React, { useState } from 'react'

const Course = () => {
    const [cn,setCn]=useState('');
    const [dn,setdn]=useState('');
    const [amt,setamt]=useState('');

    const readcourse=(event) =>{
        setCn(event.target.value);
        console.log(event.target.value);
    }
    const readduration=(event) =>{
        setCn(event.target.value);
        console.log(event.target.value);
    }
  return (
    <div>
        <form>
            <label for="cname"><b>Course name</b></label>
            <input type="text"placeholder='enter coursename' name="cname" requried/> <br /><br/>
            <label for="dtn"><b>Duration</b></label>
            <input type="number"placeholder='enter duration' name="dtn" requried/> <br /><br/>
            <label for="famt"><b>Fee Amount</b></label>
            <input type="number"placeholder='enter amount' name="famt" requried/> <br /><br/>
            <button type="submit">save</button>
        </form>
      
    </div>
  )
}

export default Course
