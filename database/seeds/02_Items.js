
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('items').del()
    .then(function () {
      // Inserts seed entries
      return knex('items').insert([
        {id: 1, name: 'corn', location: 'Kenya', description: 'yellow', price: 1.49},
        {id: 2, name: 'beans', location: 'Kenya', description: 'black', price: 2.49},
        {id: 3, name: 'rice', location: 'Kenya', description: 'white', price: 2.69}
      ]);
    });
};
