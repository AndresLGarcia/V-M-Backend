const dotenv = require("dotenv");
dotenv.config();

const config = {
  host: process.env.DBHOST,
  user: process.env.DBUSER,
  password: process.env.DBPASS,
  database: process.env.DBNAME,
};

module.exports = config;
