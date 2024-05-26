const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: String,
    email: String,
    password: String,
    // other user details
});

const User = mongoose.model("User", userSchema);

export default User;
