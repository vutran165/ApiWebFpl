const express = require('express');
const http = require('http');
const app = express();
const bodyParser = require('body-parser');
const port = 8585;

const _URL = 'https://fantasy.premierleague.com/drf';

const request = require('request');

var options = {
    headers: {
        'User-Agent': 'request'
    }
}


function callback(err, response, body) {
    if (!err && response.statusCode == 200) {
        var info = JSON.stringify(body);
        console.log(info);
    }
}

var getData = request.get(_URL + '/bootstrap-static', options, callback);
app.get('/data', function (req, res) {
    getData
    console.log(getData);
})

app.listen(port, () => console.log('done'));


