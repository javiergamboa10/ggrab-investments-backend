import { Repository, EntityRepository } from 'typeorm';
import { InvestmentGeneralInfo } from './entities/investment-general-info.entity';

@EntityRepository(InvestmentGeneralInfo)
export class InvestmentGeneralInfoRepository extends Repository<InvestmentGeneralInfo> {}
