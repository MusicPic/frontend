import { combineReducers } from 'redux';
import token from './token';
import pictures from './picture-reducer';


export default combineReducers({ token, pictures });
