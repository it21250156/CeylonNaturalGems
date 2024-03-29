const deletedusers = require('../models/deletedUsersModel');

const express = require('express');

const {
    addDeletedUser,
    getDeletedUsers,
    getDeletedUser
} = require('../controllers/deletedUsersController');
const router = express.Router();


router.post('/' , addDeletedUser)

router.get('/:id' , getDeletedUser)

router.get('/' , getDeletedUsers)

module.exports = router