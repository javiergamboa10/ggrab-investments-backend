import {
  Injectable,
  InternalServerErrorException,
  Logger,
} from '@nestjs/common';
import { plainToInstance } from 'class-transformer';
import { InvestmentTypeViewDto } from './dto/investment-type.view.dto';
import { InvestmentType } from './entities/investment-type.entity';
import { InvestmentTypesRepository } from './investment-types.repository';

@Injectable()
export class InvestmentTypesService {
  constructor(
    private readonly _investmentTypesRepository: InvestmentTypesRepository,
  ) {}

  async findAll(): Promise<InvestmentTypeViewDto[]> {
    try {
      const data: InvestmentType[] = await this._investmentTypesRepository.find(
        { order: { description: 'ASC' } },
      );
      const result: InvestmentTypeViewDto[] = data.map(
        (investmentType: InvestmentType) =>
          plainToInstance(InvestmentTypeViewDto, investmentType),
      );
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
