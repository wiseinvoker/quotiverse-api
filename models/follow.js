const mongoose = require('mongoose');

const followSchema = new mongoose.Schema({
    follower: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    following: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    // other follow details
});

const Follow = mongoose.model("Follow", followSchema);

export default Follow;
