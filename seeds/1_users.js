exports.seed = function(knex) {
  return knex('users').del()
    .then(() => {
      return knex('users').insert([{
        id:1,
        name: 'peteface'
      },{
        id:2,
        name: 'decafgrandeoxytank'
      },{
        id:3,
        name: 'craagster'
      },{
        id:4,
        name: 'lemonylemon'
      }]);
    });
};
