import React from "react"
import "./player.css"
import Sidebar from "./Sidebar"
import Body from "./Body"
import Bfooter from "./Bfooter"
import "./sidebar.css"
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import SettingsBrightnessIcon from '@material-ui/icons/SettingsBrightness';
import Playlist from "./Playlist"
import { getTokenUrl } from "./spotify";
import {DataLayerValue} from "./DataLayer"
import {BrowserRouter as Router,Route,Switch, withRouter,Link} from "react-router-dom"
import Home from "./Home"
import "./body.css"
import Header from "./Header"
import HarrdyPage from "./HarrdyPage"
import Button from "@material-ui/core/Button";
import "./header.css"
import Input from '@material-ui/core/Input';
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from "@material-ui/core/IconButton";
import Harrdy from "./Harrdy"
import AvatarUser from "./Avatar"
import Dropdown from "./Dropdown"
import { withStyles } from '@material-ui/core/styles';

function Player({spotify}){
  const [{artist,artistAlbum,user, playlists },dispatch]=DataLayerValue();
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
      <div className="player">
    
      <div className="player-body">
      <Router>
      <div className="sidebar">
        <div className="logo">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ60lY1HoA0SCj41DHoE-Tt-nZSbhbVN0F5IA&usqp=CAU" />
        <h3>SPOTIFY</h3>
        </div>
        <div className="icons">
        
        
        <Link className='text-link' to="/">
        <div className="home">
        <HomeIcon />
        <p>Home</p>
        </div>
        </Link>
      
        <div className="browse">
         <SearchIcon />
         <p>Browse</p>
        </div>
        <div className="theme">
            <SettingsBrightnessIcon />
            <p>Theme</p>
        </div>
        </div>
        <div className="playlist">
        <p className="pp">Playlist</p>
        <hr></hr>
        <div className="pp-inside">
        {
            playlists?.items?.map((playlist)=>(
                <Playlist title={playlist.name}/>
                
            ))
            
        }
        <Playlist title={"Hello"}/>
        </div>
        </div>
        </div>
     
    


    
        <div className="body">
        
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
        
        
        </div>
        </Router>
    
      </div>
      <Bfooter />
      </div>
    )
}

export default Player;