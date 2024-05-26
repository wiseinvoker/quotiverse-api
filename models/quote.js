const mongoose = require('mongoose');

const QuoteSchema = new mongoose.Schema({
    text: { type: String, required: true },
    author: { type: String, required: true },
    postedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    votes: { type: Number, default: 0 },
    comments: [{ 
        text: String,
        postedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
    }]
}, { timestamps: true });

module.exports = mongoose.model('Quote', QuoteSchema);
