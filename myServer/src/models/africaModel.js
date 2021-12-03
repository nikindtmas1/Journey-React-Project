const mongoose = require('mongoose');

const placeSchema = new mongoose.Schema({

    title: String,
    highlight: String,
    gray: String,
    imgUrl: String,
    price: String,
    ownId: String,
});

module.exports = mongoose.model('Africa', placeSchema);