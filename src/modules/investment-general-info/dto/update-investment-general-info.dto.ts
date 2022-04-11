import { PartialType } from '@nestjs/swagger';
import { CreateInvestmentGeneralInfoDto } from './create-investment-general-info.dto';

export class UpdateInvestmentGeneralInfoDto extends PartialType(
  CreateInvestmentGeneralInfoDto,
) {}
