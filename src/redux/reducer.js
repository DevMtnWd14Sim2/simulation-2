import { createStore, combineReducers } from 'redux';
import { GET_USER_NAME_GET_PASSWORD, ADD_NEW_PROPERTY, UPDATE_PROPNAME_DESCRIPTION, PROPERTY_HAS_BEEN_ADDED } from '../actions/action';



function userNamePassword(state={}, action) {
    switch (action.type) {
        case GET_USER_NAME_GET_PASSWORD:
            return action.payload;
        default: 
            return state;
 
    }
}

function addNewProperty(state=[], action) {
    switch (action.type) {
        case ADD_NEW_PROPERTY:
            return action.payload;
        
        case UPDATE_PROPNAME_DESCRIPTION:
            return [...state, action.payload];

        case PROPERTY_HAS_BEEN_ADDED:
            return [];

        default:
            return state;
    }
}


export default combineReducers({userNamePassword, addNewProperty});