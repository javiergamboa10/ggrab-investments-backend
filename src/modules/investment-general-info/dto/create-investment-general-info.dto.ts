import { ApiProperty } from '@nestjs/swagger';
import { IsCurrency, IsNotEmpty, Min } from 'class-validator';

export class CreateInvestmentGeneralInfoDto {
  @ApiProperty()
  @IsCurrency()
  @Min(0)
  @IsNotEmpty()
  total_value: number;
  @ApiProperty()
  @IsCurrency()
  @Min(0)
  @IsNotEmpty()
  initial_fee: number;
}
