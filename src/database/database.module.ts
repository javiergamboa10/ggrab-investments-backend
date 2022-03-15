import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { databaseProviders } from './database.service';

@Module({
  imports: [...databaseProviders],
  exports: [...databaseProviders],
  providers: [ConfigService],
})
export class DatabaseModule {}
