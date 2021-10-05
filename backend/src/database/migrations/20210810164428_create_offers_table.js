exports.up = function (knex) {
  return knex.schema.createTable('offers', function (table) {
    table.increments('id')
    table.string('slug', 255).notNullable()
    table.string('type', 255).notNullable()
    table.json('offer').notNullable()
    table.unique('slug')
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('offers')
}
