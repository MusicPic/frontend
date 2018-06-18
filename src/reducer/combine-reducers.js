import { combineReducers } from 'redux';
import token from './token';
import picture from './picture-reducer';


export default combineReducers({ token, picture });
