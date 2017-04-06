// API endpoints for Products
'use strict'

// Imports
var express = require('express');
var controller = require('../controllers/product');

// instance of an express router
var router = express.Router();

// Products api routes

// Get all products
router.route('/').get(function(req, res) {
    console.log("Requested: GET - /api/product");

    // Call controller method to get all products
    controller.getAll(function(err, products) {

        if(err) {
            // If there is an error thrown log the error
            console.log("Error: " + err);
            // Return an error to the user
            res.status(500).json({success:false, message: err});
            return;
        }

        // Send the results
        res.send(products);

    });

})

router.route('/:product_id')

    // Get a unique product
    .get(function(req, res) {

        // Get the id from the paremters passed
        var id = req.params.product_id;
        
        console.log("Requested: GET - /api/product/" + id);

        // Get product by the id passed
        controller.get(id, function(err, product) {
            if(err) {
                // If there is an error thrown log the error
                console.log("Error: " + err);
                // Return an error to the user
                res.status(500).json({success:false, message: err});
                return;
            }

            // Send the result
            res.json(product);
        });

    })

module.exports = router;