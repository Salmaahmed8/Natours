const express = require ('express');
const tourController = require('./../controllers/tourController.js');

const router = express.Router();

// router.param('id', tourController.checkID);

//create a checkbody middleware
//check if body contains the name and price property
//if not, send back 400(bad request)
//add it to the post handler stack

router
    .route('/')
    .get(tourController.getAllTours)
    .post(tourController.createTour);

router
    .route('/:id')
    .get(tourController.getTour)
    .patch(tourController.updateTour)
    .delete(tourController.deleteTour);

module.exports = router;