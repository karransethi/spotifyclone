import React from "react"
import "./body.css"
import Header from "./Header"
import {DataLayerValue} from "./DataLayer"
import HarrdyPage from "./HarrdyPage"
import Home from "./Home"
import {BrowserRouter as Router,Route,Switch, withRouter,Link} from "react-router-dom"
import Button from "@material-ui/core/Button";
import "./header.css"
import Input from '@material-ui/core/Input';
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from '@material-ui/icons/Search';
import Harrdy from "./Harrdy"
import AvatarUser from "./Avatar"
import Dropdown from "./Dropdown"
import { withStyles } from '@material-ui/core/styles';


function Body() {
    const [{artist,artistAlbum,user},dispatch]=DataLayerValue();
    console.log(artist);
    console.log(artistAlbum);
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
        <div className="body">
             <Router>
         <div className="header">
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
          
           <div className="harrdy">
         <Link to="/harrdyx">
          <StyledButton>Harrdy</StyledButton>
          </Link>
           </div>
           
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
            
         </div>
    
         <div className="content">
         <Switch>
        
         <Route exact path="/"component={withRouter(Home)} />
         <Route exact path="/harrdyx"component={withRouter(HarrdyPage)} />
         </Switch>
         </div>
         </Router>

        </div>
    )
}

export default Body