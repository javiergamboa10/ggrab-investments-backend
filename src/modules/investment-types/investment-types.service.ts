import {
  Injectable,
  InternalServerErrorException,
  Logger,
} from '@nestjs/common';
import { plainToInstance } from 'class-transformer';
import { IPaginationModel } from '../../shared/paginate.model';
import { InvestmentTypeViewDto } from './dto/investment-type.view.dto';
import { InvestmentType } from './entities/investment-type.entity';
import { InvestmentTypesRepository } from './investment-types.repository';

@Injectable()
export class InvestmentTypesService {
  constructor(
    private readonly _investmentTypesRepository: InvestmentTypesRepository,
  ) {}

  async findAll(
    page?: number,
    itemsPerPage?: number,
  ): Promise<IPaginationModel<InvestmentTypeViewDto>> {
    try {
      const take: number = itemsPerPage || 50;
      const skip: number = page * take || 0;
      const [investmentFees, count] =
        await this._investmentTypesRepository.findAndCount({
          take: take,
          skip: skip,
          order: {
            description: 'ASC',
          },
        });
      const data: InvestmentTypeViewDto[] = investmentFees.map(
        (investmentType: InvestmentType) =>
          plainToInstance(InvestmentTypeViewDto, investmentType),
      );
      const result: IPaginationModel<InvestmentTypeViewDto> = {
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

  async findOne(id: string): Promise<InvestmentTypeViewDto> {
    try {
      const investmentType: InvestmentType =
        await this._investmentTypesRepository.findOne(id);
      return plainToInstance(InvestmentTypeViewDto, investmentType);
    } catch (error) {
      Logger.error(error);
      throw new InternalServerErrorException();
    }
  }
}
