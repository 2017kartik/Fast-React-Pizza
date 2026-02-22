const router = require('express').Router();
const userController = require('../controllers/userController');

router.post('/users', userController.createUser);
router.post('/users/:username/orders', userController.newOrder);


router.patch('/orders/:orderId/status', userController.updateOrderStatus);


router.get('/users/email/:email', userController.getUserByEmail);
router.get('/users/:userId/orders', userController.getOrders);
router.get('/users/username/:username', userController.getUserByUsername);
router.get('/orders/:orderId', userController.getOrderDetails);

router.delete('/users/:userId', userController.deleteUser);

module.exports = router;