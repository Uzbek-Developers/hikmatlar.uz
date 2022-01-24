/* eslint-disable @typescript-eslint/no-var-requires */
const dotenv = require('dotenv');

if (process.env.NODE_ENV === 'test') {
  dotenv.config({ path: '.env.test' });
}
dotenv.config();

module.exports = {
  type: process.env.DB_TYPE,
  host: process.env.DB_HOST || 'localhost',
  port: process.env.DB_PORT || 5432,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  synchronize: process.env.DB_SYNCHRONIZE === 'true',
  logging: process.env.DB_LOGGING === 'true',
  entities: ['./src/entities/*.{ts,js}'],
  migrations: ['src/migrations/*.{ts,js}'],
  cli: {
    entitiesDir: 'src/entities',
    migrationsDir: 'src/migrations'
  }
};
