// Transaction controller file
'use strict'

// Import models
var Transaction = require('../models/transaction');

var controller = {};
    
controller.getAll = function getAllTransactions (callback) {

    // Database query to get all transactions
    Transaction.find().lean().exec().then(function transactionFindAll (transactions) {

        // Return the list of transactions
        callback(undefined, transactions);
    })
    .catch(function errorHandler (error) {
        // Return error to the callback function
        console.log("Error: " + error);
        callback(error);
    })
}

controller.get = function getTransaction (transactionId, callback) {

    // Create the query
    var query = {_id : transactionId};

    // Database query to get a transaction based on a passed id
    transaction.findOne(query).lean().exec().then(function transactionFindOne (transaction) {

        // Return the transaction
        callback(undefined, transaction);
    })
    .catch(function errorHandler (error) {
        // Return error to the callback function
        console.log("Error: " + error);
        callback(error);
    })
}

module.exports = controller;