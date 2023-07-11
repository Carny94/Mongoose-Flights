const mongoose = require('mongoose');
const Schema = mongoose.Schema;


// const reviewSchema = new Schema ({
// content: {
//     type: String,
//     required: true
// },
// rating: {
//     type: Number,
//     min: 1,
//     max:5,
//     default: 5
// },
// }, {
// timestamps: true    
// });

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
timestamps: true ,
reviews: [reviewSchema]


});





module.exports = mongoose.model('flight', flightSchema );