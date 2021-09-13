import React from "react"
import { withStyles } from '@material-ui/core/styles';
import Button from "@material-ui/core/Button";
import "./header.css"
import {BrowserRouter,Link} from "react-router-dom"

function Harrdy() {
    const StyledButton = withStyles({
        root: {
          background: '#121212',
          borderRadius: 25,
          border: 2,
          borderColor: '#fff',
          color: 'white',
          height: 34,
          padding: '0 30px',
          boxShadow: '#000',
          backgroundColor: '#242424',
          width: 110,
          height: 20,
         marginBottom: 6,
         fontFamily: 'Ubuntu',
         fontSize: 13,
         letterSpacing: 2,
        },
        
      })(Button);
    return (
        <div>
         <BrowserRouter>
         <Link to="/harrdyx">
          <StyledButton>Harrdy</StyledButton>
          </Link>
         </BrowserRouter>
         
       
 
       
        </div>
     
    )
}

export default Harrdy 