import React from "react"
import "./slot.css"

function Slot(props){
  
    return (
        <div className="slot">
          <div className="slotP">
             <img src={props.imgUrl} alt="Songphoto" />
          </div>
          <div className="slot-name">
              <p>{props.name}</p>
              <p className="artist">{props.artist}</p>
          </div>
        </div>
    )
}

export default Slot;