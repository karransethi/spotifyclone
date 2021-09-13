import React, { useEffect } from "react";
import './App.css';
import Login from "./Login";
import { getTokenUrl } from "./spotify"
import SpotifyWebApi from "spotify-web-api-js"
import { DataLayerValue } from "./DataLayer"
import Player from "./Player"

const spotify = new SpotifyWebApi();

function App() {
 
 
  const [{user,token,song,artist,discover},dispatch]= DataLayerValue();

useEffect(()=>{
const hash= getTokenUrl();
window.location.hash = ""   //for securty purposes we remove access token from url

let _token =hash.access_token;

if(_token)
{
  spotify.setAccessToken(_token);
   dispatch({
     type: "SET_TOKEN",
     token:_token,
   })

  
  
  spotify.getMe().then((user)=>{
    dispatch({
      type:"SET_USER",
      user:user
    });
  
  });

  spotify.getUserPlaylists().then((playlists)=>{
    dispatch({
      type:"SET_PLAYLISTS",
      playlists:playlists,
    })
 
  })

  spotify.getMyCurrentPlayingTrack().then((song)=>{
    dispatch({
      type:"SET_SONG",
      song:song
    })
  })

  spotify.getMyRecentlyPlayedTracks({limit:20}).then((lastPlay)=>{
    dispatch({
      type:"SET_LAST",
      lastPlay:lastPlay,
    })
  })

  spotify.getArtist('4ITkqBlf5eoVCOFwsJCnqo').then((artist)=>{
     dispatch({
       type:"SET_ARTIST",
       artist:artist,
     })
  })

  spotify.getArtistAlbums('4ITkqBlf5eoVCOFwsJCnqo').then((artistAlbum)=>{
dispatch({
  type:"SET_ARTISTALBUM",
  artistAlbum:artistAlbum,
})
  })
  spotify.getPlaylist('37i9dQZEVXcEID3PUNLUjC').then((discover)=>{
    dispatch({
      type:"SET_DISCOVER",
      discover:discover,
    })
  })
  
}

},[token,dispatch]);


  return (
    <div className="App">
    {
       token ?
      (<Player spotify={spotify} />)
      :
      (<Login />)
    }
 
    </div>
  );
}

export default App;
