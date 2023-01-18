const express = require('express');

const userControler = require('../controllers/userController');

const router = express.Router();

router.get('/me', userControler.getMe);

module.exports = router;