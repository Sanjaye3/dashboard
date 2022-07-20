import React from "react";
import "C:\\Users\\SanjayeJ\\Desktop\\dashboard\\my-app\\src\\Components\\Login.css"

import TextField from '@mui/material/TextField';
import { fontWeight, textAlign } from "@mui/system";



function Login(){


    return(
        <div className="Login">


            <div className="left">


            <img src=" https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQdIjvFldXBvG-o3jFlT6xWn_v0kLWjOA7u4_doFR-QssjTO2NS20gIwuIWeqZfXhkW90&usqp=CAU" alt="Girl in a jacket" width="500px" height="500px"/>



            </div>
        <div className="right">

            <div className="rightupper">

            <h3 style={{textAlign :"center"} }>Welcome Back!</h3>
         
         
        <TextField id="outlined-basic" label="Enter Email Address.." variant="outlined"className="email" />  <br/><br/>
        
        <TextField id="outlined-password-input"
          label="Password"
          type="Password" className="pwd"
          autoComplete="current-password" /> <br/>

        <input type="checkbox" className="rem"/>  
  <label> Remember Me</label><br/>
        

  <button type="button" className="Log">Login</button>
<hr/>

        </div>


        <div className="rightmiddle">
        <button type="button" className="Logwg">Login with Google</button> <br/>
        <button type="button" className="Logwf">Login with Facebook</button>
        <hr/>
        </div>


            <div className="rightlower">


            <a href=""  >Forgot Password?</a> <br/>
            <a href="">Create an Account!</a>
            </div>


        </div>


        </div>

       
    )
}



export default Login;