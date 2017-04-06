// Shop controller file
'use strict'

// Import models
var Shop = require('../models/shop');

var controller = {};
    
controller.getAll = function getAllShops (callback) {

    // Database query to get all shops
    Shop.find().lean().exec().then(function shopFindAll (shops) {

        // Return the list of shops
        callback(undefined, shops);
    })
    .catch(function errorHandler (error) {
        // Return error to the callback function
        console.log("Error: " + error);
        callback(error);
    })
}

controller.get = function getShop (shopId, callback) {

    // Create the query
    var query = {_id : shopId};

    // Database query to get a shop based on a passed id
    Shop.findOne(query).lean().exec().then(function shopFindOne (shop) {

        // Return the shop
        callback(undefined, shop);
    })
    .catch(function errorHandler (error) {
        // Return error to the callback function
        console.log("Error: " + error);
        callback(error);
    })
}

module.exports = controller;