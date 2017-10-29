const axios = require('axios');
const baseURL = '/api/wizard';

function createProperty(property) {
    return axios
        .post(`${baseURL}/create_property`, property)
        .then( () => res.send())
        .catch(err => {
            console.error(`Error connecting to server: ${err}.`);
            res.send(err);
        });
}

export {
    createProperty,
};
