import { Repository, EntityRepository } from 'typeorm';
import { Investor } from './entities/investor.entity';

@EntityRepository(Investor)
export class InvestorsRepository extends Repository<Investor> {}
