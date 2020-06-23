const { table } = require("../data/config");

exports.up = async function (knex) {
  await knex.schema.createTable("cars", function (tbl) {
    tbl.increments("id", 255);
    tbl.string("VIN", 255).notNull().unique();
    tbl.string("make", 255).notNull();
    tbl.string("model", 255).notNull();
    tbl.real("milage", 255).notNull();
  });
};

exports.down = async function (knex) {
  await knex.schema.dropTableIfExists("cars");
};
