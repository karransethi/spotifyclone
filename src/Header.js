import React from "react";
import "./header.css"
import Input from '@material-ui/core/Input';
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from '@material-ui/icons/Search';
import Harrdy from "./Harrdy"
import AvatarUser from "./Avatar"
import {DataLayerValue} from "./DataLayer"
import Dropdown from "./Dropdown"
import {BrowserRouter,Link} from "react-router-dom"
import { withStyles } from '@material-ui/core/styles';
import Button from "@material-ui/core/Button";

function Header() {
  const [{user},dispatch]=DataLayerValue();
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
        <div className="nav">
           <div className="search">
           <Input
          placeholder="Search"
          type="text"
         
          inputProps={{
            disableUnderline:true

            }}
          startAdornment={
            <InputAdornment>
            <IconButton>
            <SearchIcon />
            </IconButton>
            </InputAdornment>
          }
        />
        
           </div>
           <div className="user-details">
            <BrowserRouter>
           <div className="harrdy">
         <Link to="/harrdyx">
          <StyledButton>Harrdy</StyledButton>
          </Link>
           </div>
           </BrowserRouter>
           <div className="user-logo">
             <AvatarUser />
           </div>
           {user && 
           <div className="display-name">
            <p>{user.display_name}</p>
           </div> }
           <div className="drop-down">
             <Dropdown />
           </div>
           </div>
          
        </div>
    )
}

export default Header