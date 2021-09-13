import React from "react";
import {withRouter} from 'react-router-dom';
import "./Home.css"
import {DataLayerValue} from "./DataLayer"
import PlayCircleFilledWhiteIcon from '@material-ui/icons/PlayCircleFilledWhite';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import AlbumIcon from '@material-ui/icons/Album';

function Home() {
    const [{discover},dispatch]=DataLayerValue();
    console.log(discover);
    return (
        <div className="home-bg">
            <div className="banner">
                <img src={discover?.images[0].url} alt="playlist"/>
               <div className="banner-content">
                   <h5>Playlist</h5>
                   <h1>Discover Weekly</h1>
                   <p>{discover?.description}</p>
               </div>
            </div>
            <div className="home-btn">
                <PlayCircleFilledWhiteIcon fontSize="large" style={{color:"#1DB954",fontSize:50}}/>
                <FavoriteBorderIcon style={{fontSize:30}} />
                <AlbumIcon />
               </div>
               <div className="heading-home">
                
                <p className="t-home"># TITLE</p>
                <p>ALBUM</p>
                <p>Popularity</p>
                <p className="date">Release-Date</p>
               </div>
               <hr />
               {
                   discover?.tracks.items.map((item)=>{
                       return (
                        <div className="heading-home maar">
                 <div className="t-home1">
                    <img src={item.track.album.images[2].url} />
                    <div className="t-home1-content">
                    <h5>{item.track.name}</h5>
                    <p>{item.track.album.artists[0].name}</p>
                    </div>
                 </div>
                  <div className="content-album">{item.track.album.name}</div>
                  <div className="content-pop">{item.track.popularity}</div>
                  <div className="date">{item.track.album.release_date}</div>
               </div>
                       )
                   })
               }
        </div>
    )
}

export default withRouter(Home);