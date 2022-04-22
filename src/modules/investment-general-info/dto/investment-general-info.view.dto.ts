import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';

@Expose()
export class InvestmentGeneralInfoViewDto {
  constructor() {
    this.totalValue = null;
    this.initialFee = null;
  }

  @ApiProperty()
  totalValue: number;
  @ApiProperty()
  initialFee: number;
}
