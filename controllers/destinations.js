const Flight = require('../models/flight');

module.exports = {
  create
};

async function create (req, res) {
    const flight = await Flight.findById(req.paramas.id);
    // push subdocs(destinations model) into mongoose array
    flight.destination.push(req.body);
    try {
        //save any changes made to the flight doc
        await flight.save();
    } catch (err) {
        console.log(err);
    }
// Step 5:  Respond to the Request (redirect if data has been changed)
res.redirect(`/flights/${flight._id}`);
    }
