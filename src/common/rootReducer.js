import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { reducer as formReducer } from 'redux-form'

import homeReducer from '../features/home/redux/reducer';
import taggrReducer from '../features/taggr/redux/reducer';


const rootReducer = combineReducers({
  routing: routerReducer,
  home: homeReducer,
  taggr: taggrReducer,
  form: formReducer
});

export default rootReducer;
