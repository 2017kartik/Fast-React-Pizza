const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ordersSchema = new Schema({
    items: [
        {
            name: {type: String, required: true},
            quantity: {type: Number, required: true},
            price: {type: Number, required: true}
        }
    ],
    totalPrice: {type: Number, required: true},
    status: {type: String, default: 'pending'},
    userId: {type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true}
}, {timestamps: true});

const userSchema = new Schema({
    username: {type: String, required: true, unique: true},
    mobile: {type: String, required: true, unique: true},
    address: {type: String, required: true},
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    isAdmin: {type: Boolean, default: false},
    orders: [ordersSchema],
    refreshToken: {type: String}
}, {timestamps: true});

module.exports = mongoose.model('User', userSchema);