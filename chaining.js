var knex = require('./knex')
knex('videos')
  .select(knex.raw('videos.*, users.name as owner_name'))
  .join('users', 'users.id', 'videos.owner_id')
  .where('videos.id', 2)
  .first()
  .then(function (video) {
    return knex('tags')
      .join('vid_tags', 'vid_tags.tag_id', 'tags.id')
      .where('vid_tags.video_id', 2)
      .then(function(tags) {
        video.tags = tags
        return video
      });
  })
  .then(function (video) {
    return knex('comments')
      .select(knex.raw('comments.*, users.name as author_name'))
      .join('users', 'users.id', 'comments.author_id')
      .where('comments.video_id', 2)
      .then(function(comments) {
        video.comments = comments
        console.log(video);
        return video
      })
  })
