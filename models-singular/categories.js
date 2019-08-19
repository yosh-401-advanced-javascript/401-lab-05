'use strict';

const schema = require('./categories-schema.js');

class Categories {
  constructor() {}
  get(_id)
    {
      if (_id) {
        return schema.findOne({_id});
      } else {
        return schema.find({})
        .then(newData => {
          return {
            count: newData.length,
            results: newData
          }
        });
        return Promise.reject(new Error('INVALID ID -- Thanks!'))
      }
    }

  create(record) {
    const newRecord = new schema(record);
    return newRecord.save();

  }

  update(_id, record) {
    return schema.findByIdAndUpdate(_id, record, {new: true});
  }

  delete(_id) {
    return schema.findByIdAndDelete(_id);
  }

}

module.exports = Categories;
