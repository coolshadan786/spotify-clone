import React, { useState, useEffect } from 'react';
import './App.css';
import Login from './Login';
import { getTokenFromUrl } from './spotify';
import SpotifyWebApi from 'spotify-web-api-js';
import Player from './Player';
import { useDataLayerValue } from './DataLayer';

const spotify = new SpotifyWebApi();
function App() {
  // const [token, setToken] = useState(initialState);
  const [{ user, token }, dispatch] = useDataLayerValue();
  //Run code based on a given condition
  useEffect(() => {
    //Code...
    const hash = getTokenFromUrl();
    window.location.hash = '';
    const _token = hash.access_token;
    if (_token) {
      dispatch({
        type: 'SET_TOKEN',
        user: _token,
      });
      // setToken(_token);
      spotify.setAccessToken(_token);
      spotify.getMe().then((user) => {
        dispatch({
          type: 'SET_USER',
          user: user,
        });
      });
      spotify.getUserPlaylists().then((playlists) => {
        dispatch({
          type: 'SET_PLAYLISTS',
          playlists: playlists,
        });
      });
    }
    console.log('I have a Token :', token);
  }, []);
  console.log('USER :', user);
  console.log('TOKEN :', token);

  return <div className="App">{token ? <Player /> : <Login />}</div>;
}

export default App;
