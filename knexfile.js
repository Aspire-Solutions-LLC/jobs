// Update with your config settings.
require("dotenv").config();


module.exports = {
  development: {
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
    client: "postgresql",
    connection: process.env.DATABASE_URL || {
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
