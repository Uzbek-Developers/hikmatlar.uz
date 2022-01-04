const appConfig = {
  environment: process.env.NODE_ENV || 'development',
  port: process.env.APP_PORT || 8080,
  adminPassword: process.env.ADMIN_USER_PASSWORD,
  adminUser: process.env.ADMIN_USER
};

export default appConfig;
