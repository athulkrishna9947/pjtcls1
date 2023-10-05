import React, { useState } from 'react'
import Logindata from './Logindata';
import { Link } from 'react-router-dom';

const Login = () => {
  const [un,setUn]=useState('');
  const [pwd,setPwd]=useState('');
  const[error,setError] =useState(false);

  const readusername =(event) =>{
    console.log(event.target.value);
    setUn(event.target.value);  

  }
  const readpassword =(event) =>{
    console.log(event.target.value);
    setPwd(event.target.value);  

  }
  const checkfilldata =(event) =>{
    if(un.trim ()===''|| pwd.trim==='')
    {
     setError(true);
     return;
    }
    
    }
  


  
  return (
    <div>
      <form>
       <h1>SIGN</h1>
      
      
      <label for="uname"><b>Username</b></label>
      <input type="text" placeholder="Enter Username" onChange={readusername} name="uname" required/><br/><br/>
  
      <label for="psw"><b>Password</b></label>
      <input type="password" placeholder="Enter Password" onChange={readpassword} name="psw" required/><br/><br/>
  
      <button type="submit" onClick={checkfilldata}></button>Login</Link></button>
      </form>
      {error &&'Error'}
    </div>
  )
}

export default Login

