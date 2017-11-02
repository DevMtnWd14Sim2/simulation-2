import { axios } from 'axios';
const baseURL = '/api/auth';

export const GET_USER_NAME_GET_PASSWORD = 'GET_USER_NAME';

export function GET_LOGIN(NAME, PASSWORD) { 
    const request = axios({ 
         method: 'get',
         url: `${baseURL}/login/${ NAME }/${ PASSWORD }`,
      })
    .then(res => res)
    .catch(err => {
        console.error(`Error connecting to server: ${err}.`);
        throw err;
    });
    return {
        type: GET_USER_NAME_GET_PASSWORD,
        payload: request,
    };
}


