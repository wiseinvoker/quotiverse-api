const mongoose = require('mongoose');

const quoteSchema = new mongoose.Schema({
    text: String,
    author: String,
    postedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    votes: { type: Number, default: 0 },
    // other quote details
});


const Quote = mongoose.model("Quote", quoteSchema);

export default Quote;
