

export const authEndpoint = 
"https://accounts.spotify.com/authorize";

const redirectUri = "http://localhost:3000/"
const clientID = "5d86c731297647a586d516ec8790cdf4"
const clientSecret = "8b899d47000f4476b5c35058daf26c57"

const scopes =[
    "user-read-currently-playing",
    "user-read-recently-played",
    "user-read-playback-state",
    "user-top-read",
    "user-modify-playback-state",
];

export const getTokenUrl =()=>{
    return window.location.hash
    .substring(1)    //split the string at & and take the frist substring
    .split('&')
    .reduce((initial,item)=>{   //takes all the items and splits at = and then takes it first part and decoded uri component
        let parts=item.split('=')
        initial[parts[0]]= decodeURIComponent(parts[1]);

        return initial;
    },{});
}

export const loginUrl = `${authEndpoint}?client_id=${clientID}&redirect_uri=${redirectUri}&scope=${scopes.join(
    "%20"
    )}&response_type=token&show_dialog=true`;