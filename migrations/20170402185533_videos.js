exports.up = function(knex) {
 return knex.schema.createTable('videos', (table) => {
  table.increments();
  table.string('title', 255)
   .notNullable();
  table.integer('owner_id')
   .references('users.id')
   .onDelete('CASCADE')
   .notNullable()
   .index();
 });
};

exports.down = function(knex) {
 return knex.schema.dropTable('videos');
};
