import { Module } from '@nestjs/common';
import { IdentityTypesService } from './identity-types.service';
import { IdentityTypesController } from './identity-types.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { IdentityTypesRepository } from './identity-types.repository';

@Module({
  controllers: [IdentityTypesController],
  providers: [IdentityTypesService],
  imports: [TypeOrmModule.forFeature([IdentityTypesRepository])],
})
export class IdentityTypesModule {}
