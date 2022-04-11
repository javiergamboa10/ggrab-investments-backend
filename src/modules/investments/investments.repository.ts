import { Repository, EntityRepository } from 'typeorm';
import { Investment } from './entities/investment.entity';

@EntityRepository(Investment)
export class InvestmentsRepository extends Repository<Investment> {}
