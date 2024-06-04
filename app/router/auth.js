const route = require("express").Router();
const userCtrl = require('../controller/userCtrl.js')

route.post('/login', userCtrl.login);
route.post('/validateNumber',userCtrl.validateNumber);

module.exports = route;