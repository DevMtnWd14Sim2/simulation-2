import { createStore, combineReducers } from 'redux';
import { GET_USER_NAME_GET_PASSWORD } from '../actions/action';


function userNamePassword(state={},action) {
    switch (action.type) {
        case GET_USER_NAME_GET_PASSWORD:
            return action.payload;
        default: 
            return state;
    }
}

export default combineReducers({userNamePassword});