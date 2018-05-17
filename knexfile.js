// Update with your config settings.

module.exports = {

  development: {
    client: 'mysql',
    connection: {
      host: '127.0.0.1',
      user: 'factory',
      password: 'pass',
      database: 'fantomas_dev',
      charset: 'utf8mb4',
      collation: 'utf8mb4_unicode_ci'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  stage: {
    client: 'mysql',
    connection: {
      host: '127.0.0.1',
      user: 'production',
      password: 'f720pL7wMq1x',
      database: 'fantomas_stage',
      charset: 'utf8mb4',
      collation: 'utf8mb4_unicode_ci'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'mysql',
    connection: {
      host: '127.0.0.1',
      user: 'production',
      password: 'f720pL7wMq1x',
      database: 'fantomas_prod',
      charset: 'utf8mb4',
      collation: 'utf8mb4_unicode_ci'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};
