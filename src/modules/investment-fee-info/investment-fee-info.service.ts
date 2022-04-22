import {
  Injectable,
  InternalServerErrorException,
  Logger,
} from '@nestjs/common';
import { plainToInstance } from 'class-transformer';
import { IPaginationModel } from '../../shared/paginate.model';
import { CreateInvestmentFeeInfoDto } from './dto/create-investment-fee-info.dto';
import { InvestmentFeeInfoViewDto } from './dto/investment-fee-info.view.dto';
import { InvestmentFeeInfo } from './entities/investment-fee-info.entity';
import { InvestmentFeeInfoRepository } from './investment-fee-info.repository';

@Injectable()
export class InvestmentFeeInfoService {
  constructor(
    private readonly _investmentFeeInfoRepository: InvestmentFeeInfoRepository,
  ) {}

  async create(
    investmentId: string,
    createInvestmentFeelInfoDtos: CreateInvestmentFeeInfoDto[],
  ): Promise<InvestmentFeeInfoViewDto[]> {
    try {
      Logger.log('[Service] create investment fee info');
      const entities: InvestmentFeeInfo[] = createInvestmentFeelInfoDtos.map(
        (feeInfo: CreateInvestmentFeeInfoDto) => {
          let investmentFeeInfo: InvestmentFeeInfo = new InvestmentFeeInfo();
          investmentFeeInfo = plainToInstance(InvestmentFeeInfo, feeInfo);
          investmentFeeInfo.investmentId = investmentId;
          return investmentFeeInfo;
        },
      );
      const result: InvestmentFeeInfo[] =
        await this._investmentFeeInfoRepository.save(entities);
      return result.map((feeInfo: InvestmentFeeInfo) => {
        return plainToInstance(InvestmentFeeInfoViewDto, feeInfo);
      });
    } catch (error) {
      Logger.error(error);
      throw new InternalServerErrorException();
    }
  }

  async findByInvestmentId(
    investmentId: string,
    page?: number,
    itemsPerPage?: number,
  ): Promise<IPaginationModel<InvestmentFeeInfoViewDto>> {
    try {
      const take: number = itemsPerPage || 50;
      const skip: number = page * take || 0;
      const [investmentFees, count] =
        await this._investmentFeeInfoRepository.findAndCount({
          take: take,
          skip: skip,
          order: {
            description: 'ASC',
          },
          where: {
            investmentId,
          },
        });
      const data: InvestmentFeeInfoViewDto[] = investmentFees.map(
        (investmentFee: InvestmentFeeInfo) =>
          plainToInstance(InvestmentFeeInfoViewDto, investmentFee),
      );
      const result: IPaginationModel<InvestmentFeeInfoViewDto> = {
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

  async findOne(id: string): Promise<InvestmentFeeInfoViewDto> {
    try {
      const investmentFeeInfo: InvestmentFeeInfo =
        await this._investmentFeeInfoRepository.findOne(id);
      return plainToInstance(InvestmentFeeInfoViewDto, investmentFeeInfo);
    } catch (error) {
      Logger.error(error);
      throw new InternalServerErrorException();
    }
  }
}
