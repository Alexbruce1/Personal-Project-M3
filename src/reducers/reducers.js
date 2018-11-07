export const mediaReducer = (state = [], action) => {
  switch (action.type) {
    case 'SET_DATA':
      return action.media;
    case 'REMOVE_STATE_MEDIA':
      // return action.media;
      return [];
    case 'ADD_DATA_TYPE':
      return action.dataType;
    default:
      return state;
  }
}