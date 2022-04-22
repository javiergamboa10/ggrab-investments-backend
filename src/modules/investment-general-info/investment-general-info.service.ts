import {
  Injectable,
  InternalServerErrorException,
  Logger,
} from '@nestjs/common';
import { plainToInstance } from 'class-transformer';
import { CreateInvestmentGeneralInfoDto } from './dto/create-investment-general-info.dto';
import { InvestmentGeneralInfoViewDto } from './dto/investment-general-info.view.dto';
import { InvestmentGeneralInfo } from './entities/investment-general-info.entity';
import { InvestmentGeneralInfoRepository } from './investment-general-info.repository';

@Injectable()
export class InvestmentGeneralInfoService {
  constructor(
    private readonly _investmentGeneralInfoRepository: InvestmentGeneralInfoRepository,
  ) {}

  async create(
    investmentId: string,
    createInvestmentGeneralInfoDto: CreateInvestmentGeneralInfoDto,
  ): Promise<InvestmentGeneralInfoViewDto> {
    try {
      Logger.log('[Service] create investment general info');
      let entity: InvestmentGeneralInfo = new InvestmentGeneralInfo();
      entity = plainToInstance(
        InvestmentGeneralInfo,
        createInvestmentGeneralInfoDto,
      );
      entity.investmentId = investmentId;
      const result: InvestmentGeneralInfo =
        await this._investmentGeneralInfoRepository.save(entity);
      return plainToInstance(InvestmentGeneralInfoViewDto, result);
    } catch (error) {
      Logger.error(error);
      throw new InternalServerErrorException();
    }
  }

  async findByInvestmentId(
    investmentId: string,
  ): Promise<InvestmentGeneralInfoViewDto> {
    try {
      const investmentGeneralInfo: InvestmentGeneralInfo =
        await this._investmentGeneralInfoRepository.findOne(investmentId);
      return plainToInstance(
        InvestmentGeneralInfoViewDto,
        investmentGeneralInfo,
      );
    } catch (error) {
      Logger.error(error);
      throw new InternalServerErrorException();
    }
  }

  async findOne(id: string): Promise<InvestmentGeneralInfoViewDto> {
    try {
      const investmentGeneralInfo: InvestmentGeneralInfo =
        await this._investmentGeneralInfoRepository.findOne(id);
      return plainToInstance(
        InvestmentGeneralInfoViewDto,
        investmentGeneralInfo,
      );
    } catch (error) {
      Logger.error(error);
      throw new InternalServerErrorException();
    }
  }
}
