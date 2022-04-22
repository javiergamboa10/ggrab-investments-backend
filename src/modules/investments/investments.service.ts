import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
  Logger,
} from '@nestjs/common';
import { plainToInstance } from 'class-transformer';
import { DeleteResult } from 'typeorm';
import { IPaginationModel } from '../../shared/paginate.model';
import { ParseTool } from '../../shared/utils/parseTool';
import { CreateInvestmentDto } from './dto/create-investment.dto';
import { InvestmentViewDto } from './dto/investment.view.dto';
import { UpdateInvestmentDto } from './dto/update-investment.dto';
import { Investment } from './entities/investment.entity';
import { InvestmentsRepository } from './investments.repository';

@Injectable()
export class InvestmentsService {
  constructor(private readonly _investmentsRepository: InvestmentsRepository) {}

  async create(
    createInvestmentDto: CreateInvestmentDto,
  ): Promise<InvestmentViewDto> {
    try {
      Logger.log('[Service] create investment');
      let investment: Investment = new Investment();
      investment = plainToInstance(Investment, createInvestmentDto);
      const result: Investment = await this._investmentsRepository.save(
        investment,
      );
      return plainToInstance(InvestmentViewDto, result);
    } catch (error) {
      Logger.error(error);
      throw new InternalServerErrorException();
    }
  }

  async update(
    id: number,
    updateInvestmentDto: UpdateInvestmentDto,
  ): Promise<InvestmentViewDto> {
    Logger.log('[Service] modify investment');
    const entity: Investment = await this._investmentsRepository.findOne(id);
    if (!entity) {
      throw new BadRequestException(`La inversión con id ${id} no existe`);
    }
    try {
      ParseTool.parse(updateInvestmentDto, entity);
      const result: Investment = await this._investmentsRepository.save(entity);
      return plainToInstance(InvestmentViewDto, result);
    } catch (error) {
      Logger.error(error);
      throw new InternalServerErrorException();
    }
  }

  async remove(id: string): Promise<DeleteResult> {
    Logger.log('[Service] delete investment');
    const entity: Investment = await this._investmentsRepository.findOne(id);
    if (!entity) {
      throw new BadRequestException(`La inversión con id ${id} no existe`);
    }
    try {
      return this._investmentsRepository.delete(id);
    } catch (error) {
      Logger.error(error);
      throw new InternalServerErrorException();
    }
  }

  async findAll(
    page?: number,
    itemsPerPage?: number,
  ): Promise<IPaginationModel<InvestmentViewDto>> {
    try {
      const take: number = itemsPerPage || 50;
      const skip: number = page * take || 0;
      const [investments, count] =
        await this._investmentsRepository.findAndCount({
          take: take,
          skip: skip,
          order: {
            description: 'ASC',
          },
        });
      const data: InvestmentViewDto[] = investments.map(
        (investment: Investment) =>
          plainToInstance(InvestmentViewDto, investment),
      );
      const result: IPaginationModel<InvestmentViewDto> = {
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

  async findOne(id: string): Promise<InvestmentViewDto> {
    try {
      const investment: Investment = await this._investmentsRepository.findOne(
        id,
      );
      return plainToInstance(InvestmentViewDto, investment);
    } catch (error) {
      Logger.error(error);
      throw new InternalServerErrorException();
    }
  }
}
