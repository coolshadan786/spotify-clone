export const intialState = {
  user: null,
  playlists: [],
  playing: false,
  item: null,
  //Remove after finished developing....
  //   token:
  //     'BQAZnGQWfA1wDlQExw2cH7SFPyaTqmepckt3xeSw7nYTlo_D9pEg2bo3gMTaOGarPXw6DnBxlJkZW5wRp-lTZWoz50Zl5IfRIYnv6ErRbXS68YEoFZrEJYQsuAp6c9S9bDNORIV6U0O9DEQ7y2964W8XngBDuJM',
};

const reducer = (state, action) => {
  console.log(action);

  //Action -> type,[payload]
  switch (action.type) {
    case 'SET_USER':
      return {
        ...state,
        user: action.user,
      };
    case 'SET_TOKEN':
      return {
        ...state,
        token: action.token,
      };
    case 'SET_PLAYLISTS':
      return {
        ...state,
        playlists: action.playlists,
      };
    default:
      return state;
  }
};

export default reducer;
