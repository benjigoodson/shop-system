// Product controller file
'use strict'

// Import models
var Product = require('../models/product');

var controller = {};
    
controller.getAll = function getAllProducts (callback) {

    // Database query to get all products
    Product.find().lean().exec().then(function productFindAll (products) {

        // Return the list of products
        callback(undefined, products);
        return;
    })
    .catch(function errorHandler (error) {
        // Return error to the callback function
        console.log("Error: " + error);
        callback(error);
    })
}

controller.get = function getProduct (productId, callback) {

    // Create the query
    var query = {_id : productId};

    // Database query to get a product based on a passed id
    Product.findOne(query).lean().exec().then(function productFindOne (product) {

        // Return the product
        callback(undefined, product);
    })
    .catch(function errorHandler (error) {
        // Return error to the callback function
        console.log("Error: " + error);
        callback(error);
    })
}

module.exports = controller;