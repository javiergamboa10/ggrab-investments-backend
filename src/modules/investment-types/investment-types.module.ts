import { Module } from '@nestjs/common';
import { InvestmentTypesService } from './investment-types.service';
import { InvestmentTypesController } from './investment-types.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { InvestmentTypesRepository } from './investment-types.repository';

@Module({
  controllers: [InvestmentTypesController],
  providers: [InvestmentTypesService],
  imports: [TypeOrmModule.forFeature([InvestmentTypesRepository])],
})
export class InvestmentTypesModule {}
