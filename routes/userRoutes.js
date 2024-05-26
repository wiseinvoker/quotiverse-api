const express = require('express');
const { getUser, followUser } = require('../controllers/userController');
const auth = require('../middleware/authMiddleware');
const router = express.Router();

router.get('/:id', getUser);
router.post('/follow/:id', auth, followUser);

module.exports = router;
