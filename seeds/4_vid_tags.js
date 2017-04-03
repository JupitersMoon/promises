exports.seed = function(knex) {
  return knex('vid_tags').del()
    .then(() => {
      return knex('vid_tags').insert([{
        id:1,
        tag_id: 3,
        video_id:1
      },{
        id:2,
        tag_id: 10,
        video_id:2
      },{
        id:3,
        tag_id: 7,
        video_id:3
      },{
        id:4,
        tag_id: 1,
        video_id:2
      }]);
    });
};
