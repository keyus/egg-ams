const axios             = require('axios');
const config            = require('../util/config');

const fetch = axios.create({
    baseURL: config.baseURL,
    timeout: 10000,
})
module.exports = fetch;
