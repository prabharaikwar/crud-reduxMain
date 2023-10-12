// Merging reducer here using redux

import { combineReducers } from 'redux';
import userReducer from './Reducer';
// import {users} from './Reducer';


//this is a high level component
export default combineReducers({
    users: userReducer,
});

