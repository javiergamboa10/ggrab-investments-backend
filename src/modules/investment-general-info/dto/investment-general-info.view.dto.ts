import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';

@Expose()
export class InvestmentGeneralInfoViewDto {
  @ApiProperty()
  total_value: number;
  @ApiProperty()
  initial_fee: number;
}
