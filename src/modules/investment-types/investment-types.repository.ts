import { Repository, EntityRepository } from 'typeorm';
import { InvestmentType } from './entities/investment-type.entity';

@EntityRepository(InvestmentType)
export class InvestmentTypesRepository extends Repository<InvestmentType> {}
