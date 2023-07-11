const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const destinationSchema = new Schema({
    airport: {
        type: String,
        enum: ['AMS', 'YYZ', 'SEA', 'IAH', 'MIA']
    },

    arrival: {
        date: {
        type: Date    
        }
    },
    
});
module.exports = mongoose.model('destination', destinationSchema );