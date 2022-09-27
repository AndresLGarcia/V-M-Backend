const config = require("../config/config.db");
const mysql = require("mysql2/promise");

async function query(sql, params) {
  const connection = await mysql.createConnection(config);
  const [results] = await connection.query(sql, params);
  return results;
}

module.exports = {
  query,
};
