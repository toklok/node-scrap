const fs = require('fs');
const ca = fs.readFileSync('./../intoli-ca.crt');
const rp = require('request-promise');
require('dotenv').config({
    path: './../.env'
});

rp({
        method: 'GET',
        uri: 'http://intoli.com/blog',
        ca,
        proxy: `http://${process.env.INTOLI_PUBLIC}:${process.env.INTOLI_PRIVATE}@proxy.intoli.com`
    })
    .then(function (response, body) {
        console.log(response);
    })
    .catch(function (reason) {
        throw new Error(reason);
    });