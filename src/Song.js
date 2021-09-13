import React from "react"
import {DataLayerValue} from "./DataLayer"
import Slot from "./Slot"

function Song() {
    const [{song,lastPlay},dispatch]=DataLayerValue();
    console.log(song);
    console.log(lastPlay);
    return (
        
           <div>
            { song?
            <Slot imgUrl={song.item.album.images[2].url} name={song.item.name} artist={song.item.album.artists[0].name} />
            :
            <Slot imgUrl={lastPlay?.items[0].track.album.images[2].url} name={lastPlay?.items[0].track.name} artist={lastPlay?.items[0].track.artists[0].name} />
            }
            </div>
            
      
    )
}

export default Song