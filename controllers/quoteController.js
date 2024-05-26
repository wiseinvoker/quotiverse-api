const Quote = require('../models/quote');

exports.createQuote = async (req, res) => {
    const { text, author } = req.body;

    try {
        const newQuote = new Quote({
            text,
            author,
            postedBy: req.user.id
        });

        await newQuote.save();

        res.status(201).json(newQuote);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.getQuotes = async (req, res) => {
    try {
        const quotes = await Quote.find().populate('postedBy', 'username');
        res.status(200).json(quotes);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.voteQuote = async (req, res) => {
    const { id } = req.params;

    try {
        const quote = await Quote.findById(id);
        if (!quote) return res.status(404).json({ message: 'Quote not found' });

        quote.votes += 1;
        await quote.save();

        res.status(200).json(quote);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
