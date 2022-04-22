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
import { CreateInvestorDto } from './dto/create-investor.dto';
import { InvestorViewDto } from './dto/investor.view.dto';
import { UpdateInvestorDto } from './dto/update-investor.dto';
import { Investor } from './entities/investor.entity';
import { InvestorsRepository } from './investors.repository';

@Injectable()
export class InvestorsService {
  constructor(private readonly _investorsRepository: InvestorsRepository) {}

  async create(createInvestorDto: CreateInvestorDto): Promise<InvestorViewDto> {
    try {
      Logger.log('[Service] create investor');
      let investor: Investor = new Investor();
      investor = plainToInstance(Investor, createInvestorDto);
      const result: Investor = await this._investorsRepository.save(investor);
      return plainToInstance(InvestorViewDto, result);
    } catch (error) {
      Logger.error(error);
      throw new InternalServerErrorException();
    }
  }

  async update(
    id: number,
    updateInvestorDto: UpdateInvestorDto,
  ): Promise<InvestorViewDto> {
    Logger.log('[Service] modify investor');
    const entity: Investor = await this._investorsRepository.findOne(id);
    if (!entity) {
      throw new BadRequestException(`El inversor con id ${id} no existe`);
    }
    try {
      ParseTool.parse(updateInvestorDto, entity);
      const result: Investor = await this._investorsRepository.save(entity);
      return plainToInstance(InvestorViewDto, result);
    } catch (error) {
      Logger.error(error);
      throw new InternalServerErrorException();
    }
  }

  async remove(id: string): Promise<DeleteResult> {
    Logger.log('[Service] delete investor');
    const entity: Investor = await this._investorsRepository.findOne(id);
    if (!entity) {
      throw new BadRequestException(`El inversor con id ${id} no existe`);
    }
    try {
      return this._investorsRepository.delete(id);
    } catch (error) {
      Logger.error(error);
      throw new InternalServerErrorException();
    }
  }

  async findAll(
    page?: number,
    itemsPerPage?: number,
  ): Promise<IPaginationModel<InvestorViewDto>> {
    try {
      const take: number = itemsPerPage || 50;
      const skip: number = page * take || 0;
      const [investors, count] = await this._investorsRepository.findAndCount({
        take: take,
        skip: skip,
        order: {
          name: 'ASC',
        },
      });
      const data: InvestorViewDto[] = investors.map((investor: Investor) =>
        plainToInstance(InvestorViewDto, investor),
      );
      const result: IPaginationModel<InvestorViewDto> = {
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

  async findOne(id: number) {
    try {
      const investor: Investor = await this._investorsRepository.findOne(id);
      return plainToInstance(InvestorViewDto, investor);
    } catch (error) {
      Logger.error(error);
      throw new InternalServerErrorException();
    }
  }
}
