const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Restaurant model schema
let RestaurantSchema = new Schema({
    name: {type: String, required: true, max: 100},
    contact_name: {type: String, required: true},
    pincode: {type: Number, required: true},
    location: {type: String, required: true},
    website: {type: String, required: false},
    phone: {type: Number, required: true},
    avg_daily_trans: {type: Number, required: false}
});


// Export the model
module.exports = mongoose.model('Restaurant', RestaurantSchema);