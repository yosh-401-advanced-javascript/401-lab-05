'use strict';
const mongoose = require('mongoose');
const Categories = require('./models-singular/categories');
// Require your model

// Mongoose Server URI
const MONGOOSE_URI = 'mongodb://localhost/class05';
// Yosh -- replace with your mongo server location

// Connect
mongoose.connect(MONGOOSE_URI, {useNewUrlParser: true});

const categories = new Categories();

// const newCategories = categories.create({
//   name: 'stuff',
//   description: 'things',
// })
//   .then(savedCategories => {
//     console.log(savedCategories);
//     return categories.get(savedCategories._id);
//   })
//   .then(returnedCategories => console.log(returnedCategories))
//   .catch(error => console.log(error));

// categories.getByName('stuff')
// .then(foundCatagories => console.log(foundCatagories))
// .catch(err => console.log(error));

categories.update('5d5a3c3cb12c624f7c59cd0e', {name: 'Josh'})
.then(console.log)
.catch(console.log);

// mongoose.disconnect();