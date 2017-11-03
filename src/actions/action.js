import axios  from 'axios';
const baseURL = '/api/auth';

export const GET_USER_NAME_GET_PASSWORD = 'GET_USER_NAME';
export const ADD_NEW_PROPERTY = 'ADD_NEW_PROPERTY';
export const UPDATE_PROPNAME_DESCRIPTION = 'UPDATE_PROPNAME_DESCRIPTION'; 
export const PROPERTY_HAS_BEEN_ADDED = 'PROPERTY_HAS_BEEN_ADDED';

const arr =[]

export function GET_LOGIN(NAME, PASSWORD) { 
    const URL = `${baseURL}/login/${ NAME }/${ PASSWORD }`;
    const request = axios.get(URL);

    return {
        type: GET_USER_NAME_GET_PASSWORD,
        payload: request,
    };
}

export function POST_NEW_PROPERTY(items, isComplete) {
    debugger
    for(var x in items){
        arr.push(items[x]);
    }
    if(isComplete){
        const newProperty = {};
        const request = axios({
            method: 'post',
            url: '/api/wizard/create_property',
            data: newProperty
        });
        return {
            type: PROPERTY_HAS_BEEN_ADDED,
        }
    }else{
        return {
            type: ADD_NEW_PROPERTY,
            payload: items,
        } 
    }

}


