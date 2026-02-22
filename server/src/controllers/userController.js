const userServices = require("../services/userServices");

const createUser = async (req, res) => {
  try {
    const userData = req.body;
    const user = await userServices.createUser(userData);
    const response = {
      id: user._id,
      username: user.username,
      email: user.email,
      mobile: user.mobile,
    };
    res.status(201).json({ response: response });
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
};

const getUserByEmail = async (req, res) => {
  try {
    const email = req.params.email;
    const user = await userServices.getUserByEmail(email);
    const response = {
      id: user._id,
      username: user.username,
      email: user.email,
      mobile: user.mobile,
    };
    res.status(201).json({ response: response });
  } catch (error) {
    res.status(404).json({
      message: error.message,
    });
  }
};

const getUserByUsername = async (req, res) => {
  try {
    const username = req.params.username;
    const user = await userServices.getUserByUsername(username);
    const response = {
      id: user._id,
      username: user.username,
      email: user.email,
      mobile: user.mobile,
    };
    res.status(201).json({ response: response });
  } catch (error) {
    res.status(404).json({
      message: error.message,
    });
  }
};

const newOrder = async (req, res) => {
  try {
    const username = req.params.username;
    const orderData = req.body;
    const order = await userServices.newOrder(username, orderData);
    res.status(201).json({ response: order });
  } catch (error) {
    res.status(404).json({
      message: error.message,
    });
  }
};

const getOrderDetails = async (req, res) => {
  try {
    const orderId = req.params.orderId;
    const order = await userServices.getOrderDetails(orderId);
    res.status(201).json({ response: order });
  } catch (error) {
    res.status(404).json({
      message: error.message,
    });
  }
};

const updateOrderStatus = async (req, res) => {
  try {
    const orderId = req.params.orderId;
    const { status } = req.body;
    const order = await userServices.updateOrderStatus(orderId, status);
    res.status(201).json({ response: order });
  } catch (error) {
    res.status(404).json({
      message: error.message,
    });
  }
};

const getOrders = async (req, res) => {
  try {
    const userId = req.params.userId;
    const { page = 1, limit = 10 } = req.query;
    const orders = await userServices.getOrders(
      userId,
      parseInt(page),
      parseInt(limit),
    );
    res.status(201).json({ response: orders });
  } catch (error) {
    res.status(404).json({
      message: error.message,
    });
  }
};
const deleteUser = async (req, res) => {
  try {
    const userId = req.params.userId;
    const result = await userServices.deleteUser(userId);
    const response = {
      id: user._id,
      username: user.username,
      email: user.email,
      mobile: user.mobile,
      anonymizedOrdersCount: result.anonymizedOrdersCount,
    };
    res.status(200).json({ response: response });
  } catch (error) {
    res.status(404).json({
      message: error.message,
    });
  }
};

module.exports = {
  createUser,
  getUserByEmail,
  getUserByUsername,
  newOrder,
  getOrderDetails,
  updateOrderStatus,
  getOrders,
  deleteUser,
};
