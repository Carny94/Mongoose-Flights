const express = require('express');
const router = express.Router();
// You Do - Require the yet to be created reviews controller 
const reviewsCtrl = require('../controllers/reviews');


// You Do - Define the Route below
// router.get('/reviews', reviewsCtrl);
router.post('flights/:id/reviews', reviewsCtrl);

module.exports = router;
