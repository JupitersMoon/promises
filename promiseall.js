var knex = require('./knex')

function getVideo(id) {
  return knex('videos')
    .select(knex.raw('videos.*, users.name as owner_name'))
    .join('users', 'users.id', 'videos.owner_id')
    .where('videos.id', id)
    .first()
}

function getTagsForVideo(videoId) {
  return knex('tags')
    .join('vid_tags', 'vid_tags.tag_id', 'tags.id')
    .where('vid_tags.video_id', videoId)
}

function getCommentsForVideo(videoId) {
  return knex('comments')
    .select(knex.raw('comments.*, users.name as author_name'))
    .join('users', 'users.id', 'comments.author_id')
    .where('comments.video_id', videoId)
}

function getVideoWithTagsAndComments(videoId) {
  return Promise.all([
    getVideo(videoId),
    getTagsForVideo(videoId),
    getCommentsForVideo(videoId),
  ]).then(function (results) {
    let [video, tags, comments] = results
    video.tags = tags
    video.comments = comments
    console.log(video);
    return video
  })
}

return getVideoWithTagsAndComments(2)
