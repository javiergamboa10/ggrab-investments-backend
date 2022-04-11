import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { join } from 'path';

// TODO esta puesto manual porque no esta cogiendo el .env
const config = {
  host: process.env.DB_HOST,
  user: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  port: process.env.DB_PORT,
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
