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
    priority: {type: Boolean, default: false},
    userId: {type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true, index: true}
}, {timestamps: true});

module.exports = mongoose.model('Order', ordersSchema);