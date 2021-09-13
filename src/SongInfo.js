import React from "react"
import "./SongInfo.css"


function SongInfo(props) {
    return (
        <div className="songRow">
         <img src={props.img} alt="songimage"/>
         <div className="infoSong">
             <h1>{props.name}</h1>
             <p>{props.artist}</p>
            
         </div>
        </div>
    );
}
export default SongInfo;