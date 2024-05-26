const express = require('express');
const { createQuote, getQuotes, voteQuote } = require('../controllers/quoteController');
const auth = require('../middleware/authMiddleware');
const router = express.Router();

router.post('/create', auth, createQuote);
router.get('/', getQuotes);
router.post('/vote/:id', auth, voteQuote);

module.exports = router;
