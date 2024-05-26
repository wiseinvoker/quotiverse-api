const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
    text: String,
    quote: { type: mongoose.Schema.Types.ObjectId, ref: 'Quote' },
    postedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    // other comment details
});

const Comment = mongoose.model("Comment", commentSchema);

export default Comment;
