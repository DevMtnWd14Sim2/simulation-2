const axios = require('axios');
const baseURL = '/api/dashboard';

function getAllProperties() {
    return axios
        .get(`${baseURL}/get_all_properties`)
        .then(properties => properties)
        .catch(err => {
            console.error(`Error connecting to server: ${err}.`);
            throw err;
        });
}

function filterProperties(filter) {
    return axios
        .get(`${baseURL}/filter_properties/:${filter}`)
        .then(properties => properties)
        .catch(err => {
            console.error(`Error connecting to server: ${err}.`);
            throw err;
        });
}

function deleteProperty(id) {
    return axios
        .delete(`${baseURL}/delete_property/:${id}`)
        .then(res => res)
        .catch(err => {
            console.error(`Error connecting to server: ${err}.`);
            throw err;
        });
}

export {
    getAllProperties,
    filterProperties,
    deleteProperty,
};
