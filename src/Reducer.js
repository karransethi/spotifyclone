export const initialState = {
    user:null,
    playlists:[],
    playing:false,
    item:null,
    token:null,
    song:null,
    lastPlay:null,
    artist:null,
    artistAlbum:null,
    discover:null,
};

const reducer=(state,action)=>{
    console.log(action);
    switch(action.type){
        case "SET_USER":
            return {
                ...state,
                user: action.user,
              };
              case "SET_PLAYLISTS":
                  return {
                     ...state,
                     playlists: action.playlists, 
                  };
                  case "SET_TOKEN":
                      return {
                          ...state,
                          token: action.token,
                      }
                      case "SET_SONG":
                          return {
                              ...state,
                              song:action.song,
                          }
                          case "SET_LAST":
                              return {
                                  ...state,
                                  lastPlay:action.lastPlay
                              }
                              case "SET_ARTIST":
                                  return {
                                      ...state,
                                      artist:action.artist
                                  }
                                  case "SET_ARTISTALBUM":
                                      return {
                                          ...state,
                                          artistAlbum:action.artistAlbum
                                      }
                                      case "SET_DISCOVER":
                                          return {
                                              ...state,
                                              discover:action.discover
                                          }
            default:
            return state;
    };

}

export default reducer;