import React from "react";
import "C:\\Users\\SanjayeJ\\Desktop\\dashboard\\my-app\\src\\Components\\Creatac.css"
import TextField from '@mui/material/TextField';

function Creatac(){

    return(

        <div className="Login">


            <div className="left">


            <img src="  https://p16-sg.tiktokcdn.com/aweme/720x720/tos-alisg-v-2774/6eae9af0cc2b40209836c6e7e88ed690.jpeg" alt="Girl in a jacket" width="500px" height="500px"/>



            </div>
        <div className="right">

            <div className="rightupper">

            <h3 style={{textAlign :"center"} }>Create an Account!</h3>
         
            <TextField id="outlined-basic" label="First Name" variant="outlined"/>
            <TextField id="outlined-basic" label="Last Name" variant="outlined"/>
         
        <TextField id="outlined-basic" label="Enter Email Address.." variant="outlined"className="email" />  <br/><br/>
        
        <TextField id="outlined-password-input"
          label="Password"
          type="Password" className="pwd"
          autoComplete="current-password" />
          <TextField id="outlined-password-input"
          label="Repeat Password"
          type="Password" className="pwd"
          autoComplete="current-password" /> <br/>

        <input type="checkbox" className="rem"/>  
  <label> Remember Me</label><br/>
        

  <button type="button" className="Log">Register Account</button>
<hr/>

        </div>


        <div className="rightmiddle">
        <button type="button" className="Logwg">Login with Google</button> <br/>
        <button type="button" className="Logwf">Login with Facebook</button>
        <hr/>
        </div>


            <div className="rightlower">


            <a href=""  >Forgot Password?</a> <br/>
            <a href="">Already have an account? Login!</a>
            </div>


        </div>


        </div>
    )
}






export default Creatac;