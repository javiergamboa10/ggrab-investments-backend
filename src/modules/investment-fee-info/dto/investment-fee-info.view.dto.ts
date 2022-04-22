import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';

@Expose()
export class InvestmentFeeInfoViewDto {
  constructor() {
    this.description = null;
    this.dueDate = null;
    this.feeValue = null;
  }

  @ApiProperty()
  description: string;
  @ApiProperty()
  dueDate: number;
  @ApiProperty()
  feeValue: number;
}
