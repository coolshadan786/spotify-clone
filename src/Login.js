import React from 'react';
import './Login.css';
import { loginUri } from './spotify';
function Login() {
  return (
    <div className="login">
      {/* Spotify Logo */}
      <img
        src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
        alt="spotify_logo"
      />
      {/* Login with spotify button */}
      <a href={loginUri}>LOGIN WITH SPOTIFY</a>
    </div>
  );
}

export default Login;