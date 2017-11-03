const axios = require('axios');
const baseURL = 'http://localhost:8080/api/auth';

function authenticateUser(userObject) {
    return axios
        .post(`${baseURL}/login`, userObject)
        .then(res => res)
        .catch(err => {
            console.error(`Error connecting to server: ${err}.`);
            throw err;
        });
}

function registerUser(userObject) {
    return axios
        .post(`${baseURL}/register`, userObject)
        .then(res => res)
        .catch(err => {
            console.error(`Error connecting to server: ${err}.`);
            throw err
        });
}

export {
    authenticateUser,
    registerUser,
};
