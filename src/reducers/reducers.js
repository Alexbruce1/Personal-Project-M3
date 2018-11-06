export const mediaReducer = (state = [], action) => {
  switch (action.type) {
    case 'SET_DATA':
      return action.media;
    case 'ADD_QUERY':
      return action.query;
    case 'ADD_DATA_TYPE':
      return action.dataType;
    // case 'ADD_FAVORITE':
    //   return action.data;
    // case 'REMOVE_FAVORITE':
    //   return action.data;
    default:
      return state;
  }
}