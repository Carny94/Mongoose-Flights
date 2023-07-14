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
        date: {
        type: Date
    }
    },
    flightDeparture: {
    type: Date,
    min: new Date('2018-06-07T00:00'),
    max: new Date('2018-06-14T00:00')
    },


destination: [destinationSchema]

},{

timestamps: true 

});


module.exports = mongoose.model('flight', flightSchema );