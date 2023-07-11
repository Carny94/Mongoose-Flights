const { models } = require('mongoose');
const flightModl = require('../models/flight');
const flightCreate = require('../models/flight');


module.exports = {
    new: newFlight,
    create,
    index
    
};

async function index(req, res) {

    
    try{
        const flights = await flightModl.find({})
         res.render('flights/index' , {flights})
     } catch(err) {
         console.log(err)
     }
}


function newFlight (req, res) {
    
     res.render('flights/new', { errorMsg: ''});
};

async function create (req, res){
    req.body.Airline = req.body.Airline.trim();
    if(req.body.Airline) req.body.Airline = req.body.Airline.split(/\s*,\s*/);
    try {
        await flightModl.create (req.body);
        res.redirect('/flights');
    } catch (err) {
        console.log(err);
        res.render('flights/new', { errorMsg: err.message });
    }
}       


 