exports.seed = function(knex) {
  return knex('tags').del()
    .then(() => {
      return knex('tags').insert([{
        id:1,
        name: 'meh'
      },{
        id:2,
        name: 'rant'
      },{
        id:3,
        name: 'promo'
      },{
        id:4,
        name: 'vlog'
      },{
        id:5,
        name: 'opinion'
      },{
        id:6,
        name: 'politics'
      },{
        id:7,
        name: 'angry'
      },{
        id:8,
        name: 'sad'
      },{
        id:9,
        name: 'lame'
      },{
        id:10,
        name: 'funny'
      }]);
    });
};
