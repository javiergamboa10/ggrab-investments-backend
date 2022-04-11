import { Repository, EntityRepository } from 'typeorm';
import { InvestmentFeeInfo } from './entities/investment-fee-info.entity';

@EntityRepository(InvestmentFeeInfo)
export class InvestmentFeeInfoRepository extends Repository<InvestmentFeeInfo> {}
