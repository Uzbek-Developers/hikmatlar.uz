const dbConfig = {
  type: process.env.DB_TYPE,
  host: process.env.DB_HOST || 'localhost',
  port: process.env.APP_PORT || 5432,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  synchronize: process.env.DB_SYNCHRONIZE === 'true',
  logging: process.env.DB_LOGGING === 'true'
};

export default dbConfig;
