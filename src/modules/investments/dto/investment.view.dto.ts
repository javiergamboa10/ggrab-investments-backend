import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';
import { InvestmentFeeInfoViewDto } from '../../investment-fee-info/dto/investment-fee-info.view.dto';
import { InvestmentGeneralInfoViewDto } from '../../investment-general-info/dto/investment-general-info.view.dto';

@Expose()
export class InvestmentViewDto {
  constructor() {
    this.id = null;
    this.description = null;
    this.location = null;
    this.invesmentTypeId = null;
    this.generalInfo = null;
    this.feeInfo = [];
  }

  @ApiProperty()
  id: string;
  @ApiProperty()
  description: string;
  @ApiProperty()
  location: string;
  @ApiProperty()
  invesmentTypeId: string;
  @ApiProperty()
  generalInfo: InvestmentGeneralInfoViewDto;
  @ApiProperty({ type: [InvestmentFeeInfoViewDto] })
  feeInfo: InvestmentFeeInfoViewDto[];
}
