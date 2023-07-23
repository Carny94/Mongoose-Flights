const models  = require('mongoose');
const Flight= require('../models/flight');



module.exports = {
    new: newFlight,
    create,
    index,
    show
    
};
async function show (req,res){
    try {
        const flights = await Flight.find().exec();
        res.render('flights', { flights }); // Pass the flight data to the template
      } catch (err) {
        // Handle any errors that may occur during database retrieval
        res.status(500).send('Error fetching flights data.');
      }
    };

    
async function index(req, res) {

    
    try{
        const flights = await Flight.find({})
         res.render('flights/index' , {flights})
     } catch(err) {
         console.log(err)
     }
}


function newFlight (req, res) {
    
     res.render('flights/new', { errorMsg: ''});
};

async function create (req, res){

    for (let key in req.body) {
        if (req.body[key] === '') {
          delete req.body[key];
        }
      }
      console.log(req.body)
try {
    const flight = await Flight.create(req.body);
            res.redirect(`/flights/${flight._id}`);
} catch (err) {
    console.log(err);
    res.render('flights/new', {errorMsg: err.message});
 }
}