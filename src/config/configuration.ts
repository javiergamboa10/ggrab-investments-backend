export default () => ({
  environment: process.env.NODE_ENV || 'develop',
  port: parseInt(process.env.PORT, 10) || 3000,
  database: {
    host: process.env.DB_HOST || 'localhost',
    port: parseInt(process.env.DB_PORT, 10) || 5432,
    password: process.env.DB_PASSWORD || '123456',
    user: process.env.DB_USERNAME || 'postgres',
    database: process.env.DB_DATABASE || 'ph_auth_service',
  },
  rabbitmq: {
    connection: process.env.RABBITMQ_CONNECTION,
  },
  redis: {
    saveCachePrefixUserPropertyProfile: 'PHUPF',
    saveCachePrefixProfile: 'PHPF',
    url: process.env.REDIS_URL,
  },
});
