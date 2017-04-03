var knex = require('./knex');

function getVideo(id) {
  return knex('videos')
    .select(knex.raw('videos.*, users.name as owner_name'))
    .join('users', 'users.id', 'videos.owner_id')
    .where('videos.id', 2)
    .first()
}

function addTagsToVideo(video) {
  return knex('tags')
    .join('vid_tags', 'vid_tags.tag_id', 'tags.id')
    .where('vid_tags.video_id', video.id)
    .then(function(tags) {
      video.tags = tags
      return video
    });
}

function addCommentsToVideo(video) {
  return knex('comments')
    .select(knex.raw('comments.*, users.name as author_name'))
    .join('users', 'users.id', 'comments.author_id')
    .where('comments.video_id', video.id)
    .then(function(comments) {
      video.comments = comments
      return video
    })
}

function getVideoWithTagsAndComments(id) {
  return getVideo(id)
    .then(addTagsToVideo)
    .then(addCommentsToVideo)
}

getVideoWithTagsAndComments(2)
.then(function(data){
  console.log(data);
})
