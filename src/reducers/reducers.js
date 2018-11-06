export const mediaReducer = (state = [], action) => {
  switch (action.type) {
    case 'SET_DATA':
      return action.media;
    case 'ADD_QUERY':
      return action.query;
    case 'ADD_DATA_TYPE':
      return action.dataType;
    default:
      return state;
  }
}