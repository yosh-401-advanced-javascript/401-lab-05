'use strict';

const mongoose = require('mongoose');

// What fields and constraints do we want?
const categoriesSchema = mongoose.Schema({
  name: {
    type: String,
    required: true},
  description: {
    type: String,
    required: false},
});
categoriesSchema.post('findOne', function(doc) {
  // console.log({doc});
  // console.log(this);
});
categoriesSchema.post('init', function() {

});
categoriesSchema.post('save', function() {

});
// Do we need to run any lifecycle hooks/middleware?

module.exports = mongoose.model('categories', categoriesSchema);