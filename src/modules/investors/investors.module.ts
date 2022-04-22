import { Module } from '@nestjs/common';
import { InvestorsService } from './investors.service';
import { InvestorsController } from './investors.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { InvestorsRepository } from './investors.repository';

@Module({
  controllers: [InvestorsController],
  providers: [InvestorsService],
  imports: [TypeOrmModule.forFeature([InvestorsRepository])],
})
export class InvestorsModule {}
