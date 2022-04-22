import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
  Logger,
} from '@nestjs/common';
import { plainToInstance } from 'class-transformer';
import { ValidationHelper } from '../../../shared/validation.helper';
import { InvestmentFeeInfoViewDto } from '../../investment-fee-info/dto/investment-fee-info.view.dto';
import { InvestmentFeeInfoService } from '../../investment-fee-info/investment-fee-info.service';
import { InvestmentGeneralInfoViewDto } from '../../investment-general-info/dto/investment-general-info.view.dto';
import { InvestmentGeneralInfoService } from '../../investment-general-info/investment-general-info.service';
import { CreateInvestmentDto } from '../dto/create-investment.dto';
import { InvestmentViewDto } from '../dto/investment.view.dto';
import { InvestmentsService } from '../investments.service';

@Injectable()
export class CreateInvestmentInteractor {
  constructor(
    private readonly _investmentsService: InvestmentsService,
    private readonly _investmentGeneralInfoService: InvestmentGeneralInfoService,
    private readonly _investmentFeeInfoService: InvestmentFeeInfoService,
  ) {}

  async create(
    createInvestmentDto: CreateInvestmentDto,
  ): Promise<InvestmentViewDto> {
    Logger.log('[Interactor] validate values');
    this.validateValues(createInvestmentDto);
    Logger.log('[Interactor] create investment');
    const investment: InvestmentViewDto = await this.createInvestment(
      createInvestmentDto,
    );
    if (ValidationHelper.isValidEntity<InvestmentViewDto>(investment)) {
      const result: InvestmentViewDto = plainToInstance(
        InvestmentViewDto,
        investment,
      );
      Logger.log('[Interactor] create investment general info');
      result.generalInfo = await this.createInvestmentGeneralInfo(
        investment.id,
        createInvestmentDto,
      );
      Logger.log('[Interactor] create investment fee info');
      result.feeInfo = await this.createInvestmentFeeInfo(
        investment.id,
        createInvestmentDto,
      );
      return result;
    } else {
      throw new InternalServerErrorException();
    }
  }

  private async createInvestmentFeeInfo(
    investmentId: string,
    createInvestmentDto: CreateInvestmentDto,
  ): Promise<InvestmentFeeInfoViewDto[]> {
    return await this._investmentFeeInfoService.create(
      investmentId,
      createInvestmentDto.feeInfo,
    );
  }

  private async createInvestmentGeneralInfo(
    investmentId: string,
    createInvestmentDto: CreateInvestmentDto,
  ): Promise<InvestmentGeneralInfoViewDto> {
    return await this._investmentGeneralInfoService.create(
      investmentId,
      createInvestmentDto.generalInfo,
    );
  }

  private async createInvestment(
    createInvestmentDto: CreateInvestmentDto,
  ): Promise<InvestmentViewDto> {
    return await this._investmentsService.create(createInvestmentDto);
  }

  private validateValues(createInvestmentDto: CreateInvestmentDto): void {
    if (
      createInvestmentDto.generalInfo.initialFee >
      createInvestmentDto.generalInfo.totalValue
    ) {
      throw new BadRequestException(
        'El valor de la cuota inicial de la inversión debe ser menor que el valor total de la misma',
      );
    }
    if (
      createInvestmentDto.generalInfo.initialFee +
        createInvestmentDto.feeInfo.reduce((a, b) => {
          return a + b.feeValue;
        }, 0) !==
      createInvestmentDto.generalInfo.totalValue
    ) {
      throw new BadRequestException(
        'El valor de las cuotasde la inversión debe ser igual al valor total de la misma',
      );
    }
  }
}
