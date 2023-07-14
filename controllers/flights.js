const models  = require('mongoose');
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

    for (let key in req.body) {
        if (req.body[key] === '') {
          delete req.body[key];
        }
      }
try {
    const flight = await flightCreate.create(re.body);
            res.redirect(`/flights/${flight._id}`);
} catch {err} {
    console.log(err);
    res.render('flights/new', {errorMsg: err.message});
 }
}