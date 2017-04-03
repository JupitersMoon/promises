exports.seed = function(knex) {
  return knex('comments').del()
    .then(() => {
      return knex('comments').insert([{
        id:1,
        author_id: 3,
        video_id:1,
        text: 'i mean i guess.'
      },{
        id:2,
        author_id: 1,
        video_id:2,
        text: 'mmmm acceptable'
      },{
        id:3,
        author_id: 2,
        video_id:2,
        text: 'totally agree. hate making promises.'
      }]);
    });
};
