import { Module } from '@nestjs/common';
import { InvestmentsService } from './investments.service';
import { InvestmentsController } from './investments.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { InvestmentsRepository } from './investments.repository';
import { CreateInvestmentInteractor } from './interactor/create-investment.interactor';
import { InvestmentFeeInfoService } from '../investment-fee-info/investment-fee-info.service';
import { InvestmentGeneralInfoService } from '../investment-general-info/investment-general-info.service';
import { InvestmentGeneralInfoRepository } from '../investment-general-info/investment-general-info.repository';
import { InvestmentFeeInfoRepository } from '../investment-fee-info/investment-fee-info.repository';

@Module({
  controllers: [InvestmentsController],
  providers: [
    InvestmentsService,
    CreateInvestmentInteractor,
    InvestmentGeneralInfoService,
    InvestmentFeeInfoService,
  ],
  imports: [
    TypeOrmModule.forFeature([
      InvestmentsRepository,
      InvestmentGeneralInfoRepository,
      InvestmentFeeInfoRepository,
    ]),
  ],
})
export class InvestmentsModule {}
