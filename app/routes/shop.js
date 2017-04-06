// API endpoints for Shops
'use strict'

// Imports
var express = require('express');
var controller = require('../controllers/shop');

// instance of an express router
var router = express.Router();

// Shops api routes

// Get all shops
router.route('/').get(function(req, res) {
    console.log("Requested: GET - /api/shop");

    // Call controller method to get all shops
    controller.getAll(function(err, shops) {

        if(err) {
            // If there is an error thrown log the error
            console.log("Error: " + err);
            // Return an error to the user
            res.status(500).json({success:false, message: err});
            return;
        }

        // Send the results
        res.send(shops);

    });

})

router.route('/:shop_id')

    // Get a unique shop
    .get(function(req, res) {

        // Get the id from the paremters passed
        var id = req.params.shop_id;]
        
        console.log("Requested: GET - /api/shop/" + id);

        // Get shop by the id passed
        controller.get(id, function(err, shop) {
            if(err) {
                // If there is an error thrown log the error
                console.log("Error: " + err);
                // Return an error to the user
                res.status(500).json({success:false, message: err});
                return;
            }

            // return the shop
            res.json(shop);
        });

    })

module.exports = router;