module.exports = ({ env }) => ({
  connection: {
    client: "mysql",
    connection: {
      host: env("DATABASE_HOST", "your-db-instance-name.rds.amazonaws.com"), // Or "localhost" for local MySQL
      port: env.int("DATABASE_PORT", 3306), // MySQL default port
      database: env("DATABASE_NAME", "your-database"),
      user: env("DATABASE_USERNAME", "your-username"),
      password: env("DATABASE_PASSWORD", "your-password"),
      ssl: env.bool("DATABASE_SSL", false) ? { rejectUnauthorized: false } : false,
    },
    pool: {
      min: 2,
      max: 10,
      acquireTimeoutMillis: 60000,
    },
    debug: false,
  },
});
