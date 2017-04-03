exports.seed = function(knex) {
  return knex('videos').del()
    .then(() => {
      return knex('videos').insert([{
        id:1,
        title: 'when you find a stranger in the alps',
        owner_id:2
      },{
        id:2,
        title: 'Why You Should Never Promise Anyone Anything',
        owner_id:4
      },{
        id:3,
        title: 'when you eat brunch again and it is still meh',
        owner_id:3
      }]);
    });
};
