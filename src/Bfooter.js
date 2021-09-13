import React from "react"
import "./Bfooter.css"
import Song from "./Song"
import ShuffleIcon from '@material-ui/icons/Shuffle';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import RepeatIcon from '@material-ui/icons/Repeat';
import PlaylistPlayIcon from '@material-ui/icons/PlaylistPlay';
import DevicesIcon from '@material-ui/icons/Devices';
import VolumeUpIcon from '@material-ui/icons/VolumeUp';
import Slider from '@material-ui/core/Slider';
import { createMuiTheme } from "@material-ui/core"
import { ThemeProvider } from '@material-ui/styles';

function Bfooter() {
    const [value, setValue] = React.useState(30);

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };

    function changeOpacity(e){
      e.target.style.opacity="100%";
    }
    function rechangeOpacity(e){
      e.target.style.opacity="70%";
    }

    const muiTheme = createMuiTheme({
      overrides:{
        MuiSlider: {
          thumb:{
          color: "white",
          },
          track: {
            color: '#1DB954'
          },
          rail: {
            color: 'black'
          }
        }
    }
    });
  
    return (
        <div className="foot">
         <div className="songs">
          <Song />
         </div>
         <div className="play">
          <ShuffleIcon
           />
          <SkipPreviousIcon 
          />
          <PlayCircleOutlineIcon fontSize="large"
          />
          <SkipNextIcon 
          />
          <RepeatIcon 
          />
         </div>
         <div className="volume">
         
         <PlaylistPlayIcon />
          <DevicesIcon />
          <VolumeUpIcon />
     
          <div className="slide">
          <ThemeProvider theme={muiTheme}>
          <Slider value={value} onChange={handleChange} aria-labelledby="continuous-slider" />
          </ThemeProvider>
          </div>
         
         </div>
        </div>
    )
}

export default Bfooter;