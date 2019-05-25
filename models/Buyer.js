var mongoose = require('mongoose');  
var BuyerSchema = new mongoose.Schema({  
    name: String,
    email: String,
    location: String,
    reputation: Number,
    username: String,
    userId: Number
});
mongoose.model('Buyer', BuyerSchema);

module.exports = mongoose.model('Buyer');