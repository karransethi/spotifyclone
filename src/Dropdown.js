import React,{useState} from "react"
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import "./header.css"


function Dropdown () {
  
    return (
        <div className='dropdown'>
    
        <ArrowDropDownIcon />
       
          
            <div className="dropdown-content">
            <a href="#">Profile</a>
           <a href="#">Settings</a>
            <a href="#">Log Out</a>
            </div>
        </div>
     
    )
}

export default Dropdown