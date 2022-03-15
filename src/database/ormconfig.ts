import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { join } from 'path';

// TODO esta puesto manual porque no esta cogiendo el .env
const config = {
  host: process.env.DB_HOST || 'localhost',
  user: process.env.DB_USERNAME || 'postgres',
  password: process.env.DB_PASSWORD || '123456',
  database: process.env.DB_DATABASE || 'ph_auth_service',
  port: process.env.DB_PORT || 5432,
};

const connectionOptions: TypeOrmModuleOptions = {
  type: 'postgres',
  host: config.host,
  port: parseInt(config.port as string, 10),
  username: config.user,
  password: config.password,
  database: config.database,
  //autoLoadEntities: true,
  entities: [join(__dirname, '../**/*.entity{.ts,.js}')],
  // We are using migrations, synchronize should be set to false.
  synchronize: false,
  migrations: ['src/database/migrations/*{.ts,.js}'],
  cli: {
    migrationsDir: 'src/database/migrations',
  },
  ssl:
    process.env.NODE_ENV === 'production'
      ? { rejectUnauthorized: false }
      : false,
};

export = connectionOptions;
