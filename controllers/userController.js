const User = require('../models/user');

exports.getUser = async (req, res) => {
    try {
        const user = await User.findById(req.params.id).select('-password');
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.followUser = async (req, res) => {
    try {
        const user = await User.findById(req.user.id);
        const userToFollow = await User.findById(req.params.id);

        if (!userToFollow) return res.status(404).json({ message: 'User not found' });

        if (user.following.includes(req.params.id)) {
            return res.status(400).json({ message: 'You are already following this user' });
        }

        user.following.push(req.params.id);
        userToFollow.followers.push(req.user.id);

        await user.save();
        await userToFollow.save();

        res.status(200).json({ message: 'User followed successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
