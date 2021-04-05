import {createStore, combineReducers} from 'redux';
import homePage from './containers/HomePage/reducers';
import userPage from './containers/HomePage/UserPage/reducer';
const reducers = combineReducers({homePage});

export default createStore(reducers); 