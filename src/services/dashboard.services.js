const axios = require('axios');
const baseURL = '/api/dashboard';

function getAllProperties() {
    return axios
        .get(`${baseURL}/get_all_properties`)
        .then(properties => res.send(properties))
        .catch(err => {
            console.error(`Error connecting to server: ${err}.`);
            res.send(err);
        });
}

function filterProperties(filter) {
    return axios
        .get(`${baseURL}/filter_properties/:${filter}`)
        .then(properties => res.send(properties))
        .catch(err => {
            console.error(`Error connecting to server: ${err}.`);
            res.send(err);
        });
}

function deleteProperty(id) {
    return axios
        .delete(`${baseURL}/delete_property/:${id}`)
        .then( () => res.send())
        .catch(err => {
            console.error(`Error connecting to server: ${err}.`);
            res.send(err);
        });
}

export {
    getAllProperties,
    filterProperties,
    deleteProperty,
};
