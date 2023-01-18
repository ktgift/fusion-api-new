const express = require('express');

const authControler = require('../controllers/authController');

const router = express.Router();

router.post('/register', authControler.register);

module.exports = router;