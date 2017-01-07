import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import homeReducer from '../features/home/redux/reducer';
import taggrReducer from '../features/taggr/redux/reducer';

const rootReducer = combineReducers({
  routing: routerReducer,
  home: homeReducer,
  taggr: taggrReducer,
});

export default rootReducer;
