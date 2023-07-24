var express = require('express');
var router = express.Router();

// All actual paths start with "/flights"

var flightCtrl = require('../controllers/flights');

router.get('/', flightCtrl.index);
// route to create the new flight page
//Get flights/new
router.get('/new', flightCtrl.new);
// GET /movies/:id (show functionality) MUST be below new route

//post /flight
router.post('/', flightCtrl.create);
 
router.get('/:id', flightCtrl.show);




module.exports = router;









