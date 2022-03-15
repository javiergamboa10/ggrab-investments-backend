import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConnectionOptions } from 'typeorm';

export const databaseProviders = [
  TypeOrmModule.forRootAsync({
    imports: [ConfigModule],
    inject: [ConfigService],
    async useFactory(config: ConfigService) {
      return {
        type: 'postgres',
        host: config.get('database.host'),
        username: config.get('database.user'),
        port: parseInt(config.get('database.port'), 10),
        database: config.get('database.database'),
        password: config.get('database.password'),
        entities: [__dirname + '/../**/*.entity{.ts,.js}'],
        migrations: [__dirname + 'database/migrations/*{.ts,.js}'],
        cli: {
          migrationsDir: 'src/database/migrations',
        },
        synchronize: false,
        ssl:
          config.get('environment') === 'production'
            ? { rejectUnauthorized: false }
            : false,
      } as ConnectionOptions;
      //return config.getTypeOrmConfig() as ConnectionOptions;
    },
  }),
];
