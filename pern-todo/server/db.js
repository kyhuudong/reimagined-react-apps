const Pool = require("pg").Pool;

const pool = new Pool({
  user: "postgres",
  password: "846213579",
  host: "localhost",
  port: 5432,
  database: "pern_todo",
});

module.exports = pool;
