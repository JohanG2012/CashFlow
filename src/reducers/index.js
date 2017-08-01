import { combineReducers } from 'redux';
import loginSlide from './loginSlide';
import backgroundSidebar from './backgroundSidebar';

const rootReducer = combineReducers({
  loginSlide,
  backgroundSidebar,
});

export default rootReducer;
