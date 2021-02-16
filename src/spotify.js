//https://developer.spotify.com/documentation/web-playback-sdk/start

export const authEndpoint = 'https://accounts.spotify.com/authorize';

const redirectUri = 'http://localhost:3000/';

// const clientId = 'fea408e8cca64aaabe1896c5efdbaffb';
const clientId = '3b1c3d6dd72b441199ef885f2a3ef8db';

const scopes = [
  'user-read-currently-playing',
  'user-read-recently-played',
  'user-read-playback-state',
  'user-top-read',
  'user-modify-playback-state',
];

export const getTokenFromUrl = () => {
  return window.location.hash
    .substring(1)
    .split('&')
    .reduce((initial, item) => {
      // #accesstoken =mysupersecretkey&name=abc
      let parts = item.split('=');
      initial[parts[0]] = decodeURIComponent(parts[1]);
      return initial;
    }, {});
};

export const loginUri = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scopes=${scopes.join(
  '%20'
)}&response_type=token&show_dialog=true`;
