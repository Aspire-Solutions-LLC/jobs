// Update with your config settings.
require("dotenv").config();


module.exports = {
  development: {
    client: "pg",
    connection: {
      host: '127.0.0.1',
      database: 'jobs',
      user: 'van',
      password: 'J3pxdam-7', 
      port: 5432
    },
    migrations: {
      directory: "./data/migrations",
      tableName: "migrations"
    },
    seeds: {
      directory: "./data/seeds"
    },
    useNullAsDefault: true
  },

  testing: {
    client: "pg",
    connection: {
      host: process.env.DB_HOST,
      database: process.env.DB,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD, 
      port: process.env.PORT
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      directory: "./data/migrations",
      tableName: "migrations"
    },
    seeds: {
      directory: "./data/seeds"
    },
    useNullAsDefault: true
  },

  production: {
    client: "pg",
    connection: 'postgres://aavzyrdgjgrcns:2aacd5adceb30911920f3d4d1c0084d940c4dd42ca6343c2b60ec06963e1a937@ec2-3-234-109-123.compute-1.amazonaws.com:5432/d5n04j114l20b2' || {
      host: process.env.DB_HOST,
      database: process.env.DB,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD, 
      port: process.env.PORT
    },
    migrations: {
      directory: "./data/migrations",
      tableName: "migrations"
    },
    seeds: {
      directory: "./data/seeds"
    },
    useNullAsDefault: true
  }
};
