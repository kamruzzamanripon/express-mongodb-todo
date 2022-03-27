const express = require('express');
const router = express.Router();

const ProfileController = require('../controllers/ProfileController')


router.post('/create-profile', ProfileController.CreateProfile)

module.exports = router;