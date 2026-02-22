const User = require('../model/userModel');
const Order = require('../model/orderModel');

const createUser = async (userData) => {
    const duplicateUser = await User.findOne({$or: [{email: userData.email}, {mobile: userData.mobile}]});
    if (duplicateUser) {
        throw new Error('User with this email or mobile already exists');
    }
    const user = await User.create(userData);
    return user;
}

const getUserByEmail = async (email) => {
    const user = await User.findOne({email});
    if (!user) {
        throw new Error('User not found');
    }
    return user;
}

const getUserByUsername = async (username) => {
    const user = await User.findOne({username});
    if (!user) {
        throw new Error('User not found');
    }
    return user;
}

const newOrder = async (username, orderData) => {
    const user = await User.findOne({username});
    if (!user) {
        throw new Error('User not found');
    }

    const order = new Order(orderData);
    const savedOrder = await order.save();
    user.orders.push(savedOrder._id);
    await user.save();
    return savedOrder;
}

const getOrderDetails = async (orderId) => {
    const order = await Order.findById(orderId).populate('items');
    if (!order) {
        throw new Error('Order not found');
    }
    return order;
}

const updateOrderStatus = async (orderId, status) => {
    const order = await Order.findById(orderId);
    if (!order) {
        throw new Error('Order not found');
    }
    order.status = status;
    await order.save();
    return order;
}

const getOrders = async (userId,skip,limit) => {
    const orders = await Order.find({userId}).skip(skip).limit(limit).populate('items');
    const totalOrders = await Order.countDocuments({userId});
    return {orders, totalOrders};
}

const deleteUser = async (userId) => {
    const user = await User.findById(userId);
    if (!user) {
        throw new Error('User not found');
    }
    const updateResult = await Order.updateMany({userId}, {$set: {userId: process.env.DELTED_USER_ID}});
    await User.findByIdAndDelete(userId);
    return {user, anonymizedOrdersCount: updateResult.modifiedCount};
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