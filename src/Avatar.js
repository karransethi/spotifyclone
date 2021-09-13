import React from "react"
import {DataLayerValue} from "./DataLayer"
import Avatar from '@material-ui/core/Avatar';
import "./header.css"

function AvatarUser() {
    const [{user},dispatch]=DataLayerValue();
    console.log(user);
    return (
        
           user &&
             <div> 
                <Avatar alt="display-image" src={user.images[0].url} style={{height:"25px",width:"25px"}} />
            
             </div>
        
           )
    
}

export default AvatarUser