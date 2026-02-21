const userServices = require('../services/userServices');

const createUser = async (req, res) => {
    try {
        const userData = req.body;
        const user = await userServices.createUser(userData);
        const response = {
            id: user._id,
            username: user.username,
            email: user.email,
            mobile: user.mobile
        };
        res.status(201).json({response: response});
    } catch (error) {
        res.status(400).json({
            message: error.message
        });
    }
}

module.exports = {
    createUser
}