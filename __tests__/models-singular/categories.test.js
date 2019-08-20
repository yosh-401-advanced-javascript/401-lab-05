const Categories = require('../../models-singular/categories.js');

const supergoose = require('../supergoose.js');

describe('Categories Model (Singular)', () => {

  it('can create() a new category', () => {
    const categories = new Categories();
    const testCategories = {
      name: 'stuff',
      description: 'things',
    };

    return categories.create(testCategories).
      then(savedCategories => {
        Object.keys(testCategories).forEach(key => {
          expect(savedCategories[key].toEqual(testCategories[key]));
        });
      }).
      then(returnedCategories => console.log(returnedCategories)).
      catch(error => console.log(error));
  });
  it('can get() a new category', () => {
    const categories = new Categories();
    const testCategories = {
      name: 'Helper',
      description: 'robot',
    };

    return categories.create(testCategories).
      then(savedCategories => {
        Object.keys(testCategories).forEach(key => {
          expect(savedCategories[key].toEqual(testCategories[key]));
        });
      }).catch(console.log);
  });

  it('can get() a category', () => {
    const categories = new Categories();
    const testCategories = {
      name: 'Shark',
      description: 'Potato',
    };

    return categories.create(testCategories).
      then(savedCategories => {
        return categories.get(savedCategories._id);
      }).then(resolvedCategories => {
        Object.keys(testCategories).forEach(key => {
          expect(resolvedCategories[key]).toEqual(testCategories[key]);
        });
      }).catch(error => console.log(error));

  });

  it('can getAll() categories', () => {
    const categories = new Categories();
    const testCategories = {
      name: 'Fish',
      description: 'banana',
    };

    return categories.create(testCategories).
      then(() => categories.get()).
      then(allCategories => {
        expect(allCategories.count).toEqual(4);
        Object.keys(testCategories).forEach(key => {
          expect(allCategories.results[3][key]).toEqual(testCategories[key]);
        });
      }).
      catch(error => console.log(error));
  });

  it('can update() a category', () => {
    const categories = new Categories();
    const testCategories = {
      name: 'Bob Dole',
      description: 'Not Pres',
    };
    return categories.get()
      .then(allCategories => {
        return categories.update(allCategories.results[0]._id, testCategories);
      }).then(resolvedCategories => {
        Object.keys(testCategories).forEach(key => {
          expect(resolvedCategories[key]).toEqual(testCategories[key]);
        });
      })
      .catch(console.log);
  });

  it('can delete() a category', () => {
    const categories = new Categories();
    const testCategories = {
      name: 'tofu',
      description: 'smelly',
    };
    return categories.get()
      .then(savedCategories => categories.delete(savedCategories._id))
      .then(resolvedCategoies => {
        Object.keys(testCategories).forEach(key => {
          expect(resolvedCategoies[key]).toEqual(testCategories[key]);
        });
      })
      .catch(console.log);

  });
});


