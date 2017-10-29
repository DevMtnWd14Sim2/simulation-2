const axios = require('axios');
const baseURL = '/api/auth';

function authenticateUser() {
    return axios
        .post(`${baseURL}/login`, userObject)
        .then( () => res.send())
        .catch(err => {
            console.error(`Error connecting to server: ${err}.`);
            res.send(err);
        });
}

function registerUser() {
    return axios
        .post(`${baseURL}/register`, userObject)
        .then( () => res.send())
        .catch(err => {
            console.error(`Error connecting to server: ${err}.`);
            res.send(err);
        });
}

export {
    authenticateUser,
    registerUser,
};
