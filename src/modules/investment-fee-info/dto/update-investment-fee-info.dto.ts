import { PartialType } from '@nestjs/swagger';
import { CreateInvestmentFeeInfoDto } from './create-investment-fee-info.dto';

export class UpdateInvestmentFeeInfoDto extends PartialType(
  CreateInvestmentFeeInfoDto,
) {}
