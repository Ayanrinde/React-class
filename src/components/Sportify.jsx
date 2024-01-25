// import React, { useState } from 'react';
// import axios from 'axios';

// const Sportify = () => {
//   const endPoint = "https://accounts.spotify.com/api/token";
//   const clientId = "ca21267b426043469adc328407c44ac5";
//   const clientSecret = "09e6167430754791b95fdb6967bafc0a";
//   const trackId = "6rqhFgbbKwnb9MLmUQDhG6"; // Replace with the actual track ID

//   const [trackInfo, setTrackInfo] = useState("");

//   const getToken = () => {
//     const headers = {
//       'Content-Type': 'application/x-www-form-urlencoded',
//     };
//     const data = new URLSearchParams();
//     data.append('client_id', clientId);
//     data.append('client_secret', clientSecret);
//     data.append('grant_type', 'client_credentials');

//     // Send POST request to get access token
//     axios.post(endPoint, data, { headers })
//       .then(response => {
//         // console.log(response);
//         const accessToken = response.data.access_token;

//         // Set the headers for the track request
//         const trackHeaders = {
//           'Authorization': `Bearer ${accessToken}`,
//         };

//         // Send GET request to get track information
//         axios.get(`https://api.spotify.com/v1/tracks/${trackId}`, { headers: trackHeaders })
//           .then(trackResponse => {
//             // Handle the track response
//             setTrackInfo(trackResponse.data);
//             console.log(trackResponse.data);
//           })
//           .catch(trackError => {
//             // Handle track errors
//             console.error('Error fetching track:', trackError);
//           });
//       })
//       .catch(error => {
//         // Handle errors
//         console.error('Error fetching token:', error);
//       });
//   };

//   return (
//     <main>
//       <h1>Sportify</h1>
//       <button onClick={getToken}>Get Music</button>

//       {/* {trackInfo.map((element, i)=>(
//         <div key={i}>
//           <p>Title : {element}</p>
//         </div>
//       ))} */}
      
//       {trackInfo && (
//         <div>
//           <h2>Track Information:</h2>
//           <p>Title: {trackInfo.name}</p>
//           <p>Artist(s): {trackInfo.artists.map(artist => artist.name)}</p>
//           <p>Album: {trackInfo.album.name}</p>
//         </div>
//       )}
//     </main>
//   );
// };

// export default Sportify;


// import React, { useState } from 'react';
// import axios from 'axios';

// const Sportify = () => {
//   const endPoint = "https://accounts.spotify.com/api/token";
//   const clientId = "ca21267b426043469adc328407c44ac5";
//   const clientSecret = "09e6167430754791b95fdb6967bafc0a";
//   const playlistId = "3cEYpjA9oz9GiPac4AsH4n"; // Replace with the actual playlist ID

//   const [playlistInfo, setPlaylistInfo] = useState("");

//   const getToken = () => {
//     const headers = {
//       'Content-Type': 'application/x-www-form-urlencoded',
//     };
//     const data = new URLSearchParams();
//     data.append('client_id', clientId);
//     data.append('client_secret', clientSecret);
//     data.append('grant_type', 'client_credentials');

//     // Send POST request to get access token
//     axios.post(endPoint, data, { headers })
//       .then(response => {
//         const accessToken = response.data.access_token;

//         // Set the headers for the playlist request
//         const playlistHeaders = {
//           'Authorization': `Bearer ${accessToken}`,
//         };

//         // Send GET request to get playlist information
//         axios.get(`https://api.spotify.com/v1/playlists/${playlistId}`, { headers: playlistHeaders })
//           .then(playlistResponse => {
//             // Handle the playlist response
//             setPlaylistInfo(playlistResponse.data);
//             console.log(playlistResponse.data);
//           })
//           .catch(playlistError => {
//             // Handle playlist errors
//             console.error('Error fetching playlist:', playlistError);
//           });
//       })
//       .catch(error => {
//         // Handle errors
//         console.error('Error fetching token:', error);
//       });
//   };

//   return (
//     <main>
//       <h1>Sportify</h1>
//       <button onClick={getToken}>Get Playlist</button>

//       {playlistInfo && (
//         <div>
//           <h2>Playlist Information:</h2>
//           <p>Name: {playlistInfo.name}</p>
//           <p>Owner: {playlistInfo.owner.display_name}</p>
//           <p>Total Tracks: {playlistInfo.tracks.total}</p>
//           <audio src={playlistInfo.external_urls.spotify}></audio>
//         </div>
//       )}
//     </main>
//   );
// };

// export default Sportify;


import React, { useState } from 'react';
import axios from 'axios';

const Sportify = () => {
  const endPoint = "https://accounts.spotify.com/api/token";
  const clientId = "ca21267b426043469adc328407c44ac5";
  const clientSecret = "09e6167430754791b95fdb6967bafc0a";
  const playlistId = "3cEYpjA9oz9GiPac4AsH4n"; // Replace with the actual playlist ID

  const [playlistInfo, setPlaylistInfo] = useState(null);

  const getToken = () => {
    const headers = {
      'Content-Type': 'application/x-www-form-urlencoded',
    };
    const data = new URLSearchParams();
    data.append('client_id', clientId);
    data.append('client_secret', clientSecret);
    data.append('grant_type', 'client_credentials');

    // Send POST request to get access token
    axios.post(endPoint, data, { headers })
      .then(response => {
        const accessToken = response.data.access_token;

        // Set the headers for the playlist request
        const playlistHeaders = {
          'Authorization': `Bearer ${accessToken}`,
        };

        // Send GET request to get playlist information
        axios.get(`https://api.spotify.com/v1/playlists/${playlistId}`, { headers: playlistHeaders })
          .then(playlistResponse => {
            // Handle the playlist response
            setPlaylistInfo(playlistResponse.data);
            console.log(playlistResponse.data);
          })
          .catch(playlistError => {
            // Handle playlist errors
            console.error('Error fetching playlist:', playlistError);
          });
      })
      .catch(error => {
        // Handle errors
        console.error('Error fetching token:', error);
      });
  };

  return (
    <main>
      <h1>Sportify</h1>
      <button onClick={getToken}>Get Playlist</button>
  
      {playlistInfo && (
        <div>
          <h2>Playlist Information:</h2>
          <p>Name: {playlistInfo.name}</p>
          <p>Owner: {playlistInfo.owner.display_name}</p>
          <p>Total Tracks: {playlistInfo.tracks.total}</p>
  
          <h3>Tracks:</h3>
          <ul>
            {playlistInfo.tracks.items.map((track, index) => (
              <li key={index}>
                {track.track.name} - {track.track.artists.map(artist => artist.name).join(', ')}
              </li>
            ))}
          </ul>
  
          {playlistInfo.tracks.items.length > 0 && (
            <div>
              <h3>Play Music:</h3>
              <audio controls>
                <source src={playlistInfo.tracks.items[0].track.preview_url} type="audio/mp3" />
                Your browser does not support the audio tag.
              </audio>
            </div>
          )}
        </div>
      )}
    </main>
  );
};

export default Sportify;
