import { Repository, EntityRepository } from 'typeorm';
import { IdentityType } from './entities/identity-type.entity';

@EntityRepository(IdentityType)
export class IdentityTypesRepository extends Repository<IdentityType> {}
