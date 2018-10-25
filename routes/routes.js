const express = require('express');

const router = express.Router();

const serviceController = require('../controllers/service.controller');

router.get('/', serviceController);

const urlFpl = 'https://fantasy.premierleague.com/drf';

const request = require('request');
request('')

module.exports = router;