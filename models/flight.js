const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const destinationSchema = new Schema({
    airport: {
        type: String,
        enum: ['AMS', 'YYZ', 'SEA', 'IAH', 'MIA']
    },

    arrival: {
        
        type: Date    
        
    },
    
});

const flightSchema = new Schema ({
    airline: {
        type: String,
        enum: ['American', 'Souhwest', 'United', 'Emirates', 'Haiwaiian' ]
    },
    airport: {
        type: String,
        enum: ['AUS', 'HNL', 'OAK', 'SAN', 'LAX'],
        default: 'OAK'
    },
    flightNo: {
        type: Number,
        minimum: 0,
        maximum: 9999

    },
    departs: {
       
        type: Date

    },

destination: [destinationSchema]

},{

timestamps: true 

});


module.exports = mongoose.model('flight', flightSchema );