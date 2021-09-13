import React from "react"
import "./sidebar.css"
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import SettingsBrightnessIcon from '@material-ui/icons/SettingsBrightness';
import Playlist from "./Playlist"
import { getTokenUrl } from "./spotify";
import {DataLayerValue} from "./DataLayer"
import {BrowserRouter as Router,Route,Switch, withRouter,Link} from "react-router-dom"
import Home from "./Home"

function Sidebar() {
    const [{ playlists },dispatch]=DataLayerValue();
    console.log(playlists);
    return (
        <div className="sidebar">
        <div className="logo">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ60lY1HoA0SCj41DHoE-Tt-nZSbhbVN0F5IA&usqp=CAU" />
        <h3>SPOTIFY</h3>
        </div>
        <div className="icons">
        <Router>
        <Link to="/">
        <div className="home">
        <HomeIcon />
        <p>Home</p>
        </div>
        </Link>
             </Router>   
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
    )
}

export default Sidebar