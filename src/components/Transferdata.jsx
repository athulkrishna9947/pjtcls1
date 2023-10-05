import React from 'react'
import'./Transferdata.css'
const Transferdata = (props) => {
  return (
    <div>
       <h1 className='aa'>welcome </h1>
       <p>
        
         
           User Name:&nbsp; {props.username}
           <br></br>
         Pass Word:&nbsp; {props.password} 
           <br/>
          User Type:&nbsp; {props.usertype}
        
       </p>

    </div>
  )
}

export default Transferdata
