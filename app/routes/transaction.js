// API endpoints for Transactions
'use strict'

// Imports
var express = require('express');
var controller = require('../controllers/transaction');

// instance of an express router
var router = express.Router();

// Transactions api routes

// Get all transactions
router.route('/').get(function(req, res) {
    console.log("Requested: GET - /api/transaction");

    // Call controller method to get all transactions
    controller.getAll(function(err, transactions) {

        if(err) {
            // If there is an error thrown log the error
            console.log("Error: " + err);
            // Return an error to the user
            res.status(500).json({success:false, message: err});
            return;
        }

        // Send the results
        res.send(transactions);

    });

})

router.route('/:transaction_id')

    // Get a unique transaction
    .get(function(req, res) {

        // Get the id from the paremters passed
        var id = req.params.transaction_id;

        console.log("Requested: GET - /api/transaction/" + id);

        // Get transaction by the id passed
        controller.get(id, function(err, transaction) {
            if(err) {
                // If there is an error thrown log the error
                console.log("Error: " + err);
                // Return an error to the user
                res.status(500).json({success:false, message: err});
                return;
            }

            // return the transaction
            res.json(transaction);
        });

    })

module.exports = router;