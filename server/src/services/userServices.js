const userRepository = require('../repository/userRepository');

const createUser = async (userData) => {
    const user = await userRepository.createUser(userData);
    return user;
}

module.exports = {
    createUser
} 