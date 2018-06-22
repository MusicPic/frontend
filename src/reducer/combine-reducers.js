import { combineReducers } from 'redux';
import token from './token';
import picture from './picture-reducer';
import profile from './profile-reducer';

export default combineReducers({ token, picture, profile });
