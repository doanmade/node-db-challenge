exports.up = function(knex) {
  return knex.schema
    .createTable("projects", tbl => {
      tbl.increments();
      tbl.string("name", 200).notNullable();
      tbl.text("description");
      tbl.boolean("completed").defaultTo(false);
    })
    .createTable("resources", tbl => {
      tbl.increments();
      tbl.string("name", 300).notNullable();
      // tbl.string('link to resource')
      tbl.text("description");
    })
    .createTable("tasks", tbl => {
      tbl.increments();
      tbl.string("description").notNullable();
      tbl.text("notes");
      tbl.boolean("completed").defaultTo(false);
      tbl
        .integer("project_id")
        .notNullable()
        .unsigned()
        .references("id")
        .inTable("projects")
        .onDelete("CASCADE")
        .onUpdate("CASCADE");
      tbl
        .integer("resource_id")
        .unsigned()
        .references("id")
        .inTable("resources")
        .onDelete("CASCADE")
        .onUpdate("CASCADE");
    });
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists("tasks")
    .dropTableIfExists("resources")
    .dropTableIfExists("projects");
};
