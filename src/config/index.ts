import * as dotenv from 'dotenv';
dotenv.config();
import app from './app';

const isProduction = process.env.APP_IS_PRODUCTION === 'true';

export { isProduction, app };
