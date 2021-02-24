
exports.up = function(knex) {
  return knex.schema
  .createTable('users', tbl => {
      tbl.increments();
      tbl.string('username', 128).notNullable().unique().index();
      tbl.string('password', 256).notNullable();
  })
  .createTable('items', tbl => {
      tbl.increments();
      tbl.string('name', 128).notNullable();
      tbl.string('location', 128).notNullable();
      tbl.string('description', 256);
      tbl.integer('price').notNullable();
  })
};

exports.down = function(knex) {
    return knex.schema
    .dropTableIfExists('user').dropTableIfExists('items');
  
};
