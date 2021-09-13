import React, { useEffect } from "react"
import {DataLayerValue} from "./DataLayer"
import layout22 from "./layout22.jpg"
import hh from "./hh.png"
import "./HarrdyPage.css"
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import SongInfo from "./SongInfo"
import "./SongInfo.css"


function HarrdyPage(props) {
  
    const [{artist,artistAlbum},dispatch]=DataLayerValue();
   
    return (
        <div className="Harrdy-Sandhu">
        <div className="title-img">
        <div className="naam">
        Harrdy Sandhu
        </div>
        <div>
        <img className="hlog" src={hh} alt="Harrdy_img"/>
        </div>
   
        </div>
      
        <div className="playH">
        <PlayCircleFilledIcon fontSize="large"  />
        </div>
        
        <div className="aboutHarrdy">
        <h2>About</h2>
        
            <div className="card">
            <div className="front">
            <img src={artist?.images[1].url} alt="Avatar" className="cardImg" />
  <div className="container">
    <h4><b>2,251,126 Monthly Listeners</b></h4> 
    Former Indian Cricketer. Started my second innings as a Singer/Performer and now trying my hand out at acting too.
  </div>
            </div>
     <div className="back">
      insta, twitter, youtube
     </div>
  
</div>
        </div> 


        <div className="albums">
          <h3>Popular</h3>
          {artistAlbum?.items.map(item=>{
            return(
              <div>
            
              <div className="songRow">
              <PlayCircleFilledIcon />
         <img src={item.images[2].url} alt="songimage"/>
         <div className="infoSong">
             <h1>{item.name}</h1>
             <p>{item.artists[0].name}</p> 
         </div>
        </div>
        </div>
            )
        
          })}
        
        </div>
        </div>
     
    )
}

export default HarrdyPage;