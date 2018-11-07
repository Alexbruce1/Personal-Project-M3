export const mediaReducer = (state = [], action) => {
  switch (action.type) {
    case 'SET_DATA':
      return action.media;
    case 'REMOVE_STATE_MEDIA':
      return action.media;
    default:
      return state;
  }
}