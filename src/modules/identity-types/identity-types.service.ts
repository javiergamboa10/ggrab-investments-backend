import {
  Injectable,
  InternalServerErrorException,
  Logger,
} from '@nestjs/common';
import { plainToInstance } from 'class-transformer';
import { IPaginationModel } from '../../shared/paginate.model';
import { IdentityTypeViewDto } from './dto/identity-type.view.dto';
import { IdentityType } from './entities/identity-type.entity';
import { IdentityTypesRepository } from './identity-types.repository';

@Injectable()
export class IdentityTypesService {
  constructor(
    private readonly _identityTypesRepository: IdentityTypesRepository,
  ) {}

  async findAll(
    page?: number,
    itemsPerPage?: number,
  ): Promise<IPaginationModel<IdentityTypeViewDto>> {
    try {
      const take: number = itemsPerPage || 50;
      const skip: number = page * take || 0;
      const [investmentFees, count] =
        await this._identityTypesRepository.findAndCount({
          take: take,
          skip: skip,
          order: {
            description: 'ASC',
          },
        });
      const data: IdentityTypeViewDto[] = investmentFees.map(
        (identityType: IdentityType) =>
          plainToInstance(IdentityTypeViewDto, identityType),
      );
      const result: IPaginationModel<IdentityTypeViewDto> = {
        data,
        count,
        currentPage: page,
        itemsPerPage: take,
      };
      return result;
    } catch (error) {
      Logger.error(error);
      throw new InternalServerErrorException();
    }
  }

  async findOne(id: string): Promise<IdentityTypeViewDto> {
    try {
      const IdentityType: IdentityType =
        await this._identityTypesRepository.findOne(id);
      return plainToInstance(IdentityTypeViewDto, IdentityType);
    } catch (error) {
      Logger.error(error);
      throw new InternalServerErrorException();
    }
  }
}
