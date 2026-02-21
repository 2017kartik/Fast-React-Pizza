const User = require('../model/userModel');

const createUser = async (userData) => {
    const duplicateUser = await User.findOne({$or: [{email: userData.email}, {mobile: userData.mobile}]});
    if (duplicateUser) {
        throw new Error('User with this email or mobile already exists');
    }
    const user = await User.create(userData);
    return user;
}

module.exports = {
    createUser
}