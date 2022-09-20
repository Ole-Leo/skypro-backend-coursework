const router = require('express').Router();
const greetings = require('../controllers/greetings');

router.get('/', greetings);

module.exports = router;
