const userRepository = require('../repository/userRepository');

const createUser = async (userData) => {
    const user = await userRepository.createUser(userData);
    return user;
}

const getUserByEmail = async (email) => {
    const user = await userRepository.getUserByEmail(email);
    return user;
}

const getUserByUsername = async (username) => {
    const user = await userRepository.getUserByUsername(username);
    return user;
}

const newOrder = async (username, orderData) => {
    const order = await userRepository.newOrder(username, orderData);
    return order;
}

const getOrderDetails = async (orderId) => {
    const order = await userRepository.getOrderDetails(orderId);
    return order;
}

const updateOrderStatus = async (orderId, status) => {
    const order = await userRepository.updateOrderStatus(orderId, status);
    return order;
}

const getOrders = async (userId, page, limit) => {
    const skip = (page - 1) * limit;
    const orders = await userRepository.getOrders(userId, skip, limit);
    return orders;
}

const deleteUser = async (userId) => {
    const result = await userRepository.deleteUser(userId);
    return result;
}

module.exports = {
    createUser,
    getUserByEmail,
    getUserByUsername,
    newOrder,
    getOrderDetails,
    updateOrderStatus,
    getOrders,
    deleteUser
} 