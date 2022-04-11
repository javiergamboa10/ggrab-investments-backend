import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';

@Expose()
export class InvestmentFeeInfoViewDto {
  @ApiProperty()
  description: string;
  @ApiProperty()
  dueDate: number;
  @ApiProperty()
  feeValue: number;
}
