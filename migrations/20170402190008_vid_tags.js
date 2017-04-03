exports.up = function(knex) {
 return knex.schema.createTable('vid_tags', (table) => {
  table.increments();
  table.integer('tag_id')
   .references('tags.id')
   .onDelete('CASCADE')
   .notNullable()
   .index();
  table.integer('video_id')
   .references('videos.id')
   .onDelete('CASCADE')
   .notNullable()
   .index();
 });
};

exports.down = function(knex) {
 return knex.schema.dropTable('vid_tags');
};
