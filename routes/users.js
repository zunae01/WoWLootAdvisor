var express = require('express');
var router = express.Router();
const isAuth = require('../middleware/is-auth'); //use this middleware in each route that should only be accessible when authenticated

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.json([{ "id":"1", "name":"Malvida"}, { "id":"2", "name":"Fabix"}, { "id":"13", "name":"Mareda"}]);
});

module.exports = router;
