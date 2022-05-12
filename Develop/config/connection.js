require('dotenv').config();

const Sequelize = require('sequelize');
console.log(process.env)
// if else, ternary

const sequelize = process.env.JAWSDB_URL
  ? new Sequelize(process.env.JAWSDB_URL)
  // : new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PW, {
    : new Sequelize('ecommerce_db', 'root', 'Fletch2711!', {
      host: 'localhost',
      dialect: 'mysql',
      dialectOptions: {
        decimalNumbers: true,
      },
    });

module.exports = sequelize;
