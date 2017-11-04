import axios  from 'axios';
const baseURL = '/api/auth';

export const GET_USER_NAME_GET_PASSWORD = 'GET_USER_NAME';
export const ADD_NEW_PROPERTY = 'ADD_NEW_PROPERTY';
export const UPDATE_PROPNAME_DESCRIPTION = 'UPDATE_PROPNAME_DESCRIPTION'; 
export const PROPERTY_HAS_BEEN_ADDED = 'PROPERTY_HAS_BEEN_ADDED';
// export const ADDRESS_HAS_BEEN_ADDED = 'ADDRESS_HAS_BEEN_ADDED';

let data ={}


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
    data = Object.assign({}, data, items)
    if(isComplete){
        const newProperty = {};
        const request = axios({
            method: 'post',
            url: 'http://localhost:8080/api/wizard/create_property',
            data,
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