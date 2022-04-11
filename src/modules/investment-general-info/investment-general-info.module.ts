import { Module } from '@nestjs/common';
import { InvestmentGeneralInfoService } from './investment-general-info.service';
import { InvestmentGeneralInfoController } from './investment-general-info.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { InvestmentGeneralInfoRepository } from './investment-general-info.repository';

@Module({
  controllers: [InvestmentGeneralInfoController],
  providers: [InvestmentGeneralInfoService],
  imports: [TypeOrmModule.forFeature([InvestmentGeneralInfoRepository])],
})
export class InvestmentGeneralInfoModule {}
