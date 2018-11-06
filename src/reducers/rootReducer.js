import { combineReducers } from 'redux';
import { mediaReducer } from './reducers';

export const rootReducer = combineReducers({
  media: mediaReducer,
});
