const router = require('express').Router();
const error404 = require('../controllers/errors');

router.use('*', error404);

module.exports = router;
