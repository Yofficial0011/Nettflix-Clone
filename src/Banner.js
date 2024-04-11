import React, { useEffect } from 'react';
import "./Banner.css";
// import axios  from './axios';
// import requests from './Request';
function Banner() {
    const [movie, setMovie] = useState([]);

    useEffect(()=>{
       async function fethData() {
        const request = await axios.get(requests.fetchNetlixOriginals);
        setMovie(
            request.data.results[
                Math.floor(Math.random()+ request.data.results.length -1)

            ]
        )
       } 

    },[])

        console.log(movie);
    function truncate(string,n){
        return string?.length > n ? string.substr(0,n-1)+"...." : string;
    }
  return (
    <header className='banner'
     style={{
        backgroundSize: "cover",
        backgroundImage: `url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASIAAACuCAMAAAClZfCTAAAAA1BMVEUAAACnej3aAAAASElEQVR4nO3BMQEAAADCoPVPbQhfoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABeA8XKAAFZcBBuAAAAAElFTkSuQmCC')`,
        backgroundPosition: "center center",

    }}
    >
        <div className="banner__contents">
            <h1 className="banner__title">Movie Name</h1>
            <div className="banner__buttons">
                <button className='banner__buttons'>Play</button>
                <button className='banner__buttons'>My List</button>
            </div>
            <h1 className="banner__description">
            {truncate(`This is a test Description
            This is a test Descript
            This is a test Description
            This is a test Description
            This is a test DescriptionThis is a test DescriptionThis is a test Description
            This is a test Description
            This is a test Description
            This is a test Description
            This is a test Description
            This is a test Description
            This is a test DescriptionThis is a test Description`,50)}</h1>
            

        </div>
        <div className="banner--fadeBottom" />

    </header>
  )
}

export default Banner
