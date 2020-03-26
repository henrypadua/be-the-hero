exports.up = function(knex) {
  return knex.schema.createTable("incidents", function(table) {
    table.increments(); //Primary Key autoincrement

    table.string("title").notNullable();
    table.string("description").notNullable();
    table.decimal("value").notNullable();

    table.string("ong_id").notNullable();

    table
      .foreign("ong_id")
      .references("id")
      .inTable("ongs");
  }); //Relacionamento de chave estrangeira
};

exports.down = function(knex) {
  return knex.schema.dropTable("incidents");
};
