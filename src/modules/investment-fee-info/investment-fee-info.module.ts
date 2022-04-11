import { Module } from '@nestjs/common';
import { InvestmentFeeInfoService } from './investment-fee-info.service';
import { InvestmentFeeInfoController } from './investment-fee-info.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { InvestmentFeeInfoRepository } from './investment-fee-info.repository';

@Module({
  controllers: [InvestmentFeeInfoController],
  providers: [InvestmentFeeInfoService],
  imports: [TypeOrmModule.forFeature([InvestmentFeeInfoRepository])],
})
export class InvestmentFeeInfoModule {}
