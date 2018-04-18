const initState = {
  latestGames: []
}

const gamesReducer = (state = initState, action) => {
  switch (action.type) {
    case 'RECEIVE_LATEST_GAMES':
    {
      return {
        ...state,
        latestGames: action.games
      }
    }
    default:
      return state
  }
}

export default gamesReducer
