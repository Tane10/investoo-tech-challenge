module.exports = {
  client: 'mysql2',
  connection: {
    host: process.env.DB_HOST || 'mysql',
    socketPath: process.env.DB_SOCKET,
    database: process.env.DB_NAME || 'offers',
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || 'password',
  },
  migrations: {
    directory: './src/database/migrations',
    tableName: 'migrations',
  },
  seeds: {
    directory: './src/database/seeds',
  },
}
