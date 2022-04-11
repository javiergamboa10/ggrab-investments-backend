import {
  Injectable,
  InternalServerErrorException,
  Logger,
} from '@nestjs/common';
import { plainToInstance } from 'class-transformer';
import { InvestmentGeneralInfoViewDto } from './dto/investment-general-info.view.dto';
import { InvestmentGeneralInfo } from './entities/investment-general-info.entity';
import { InvestmentGeneralInfoRepository } from './investment-general-info.repository';

@Injectable()
export class InvestmentGeneralInfoService {
  constructor(
    private readonly _investmentGeneralInfoRepository: InvestmentGeneralInfoRepository,
  ) {}

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
