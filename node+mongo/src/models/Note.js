const mongoose = require('mongoose');
const {Schema} = mongoose;

const schema = new Schema({
    title: {type: String, required: true},
    description: {type: String, required: true},
    date: {type: Date, default: Date.now()}
});

module.exports = mongoose.model('Note',schema);