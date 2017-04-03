exports.up = function(knex) {
 return knex.schema.createTable('comments', (table) => {
  table.increments();
  table.integer('author_id')
   .references('users.id')
   .onDelete('CASCADE')
   .notNullable()
   .index();
  table.integer('video_id')
   .references('videos.id')
   .onDelete('CASCADE')
   .notNullable()
   .index();
  table.text('text');
 });
};

exports.down = function(knex) {
 return knex.schema.dropTable('comments');
};
