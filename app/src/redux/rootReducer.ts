import {combineReducers} from 'redux';
import darkModeReducer from './reducers/dark-mode/reducer';
import fileReducer from './reducers/files/reducer'


const rootReducer = combineReducers({ darkMode: darkModeReducer, files: fileReducer})
export default rootReducer;
