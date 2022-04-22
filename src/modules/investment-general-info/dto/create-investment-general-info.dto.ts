import { ApiProperty } from '@nestjs/swagger';
import { IsCurrency, IsNotEmpty, Min } from 'class-validator';

export class CreateInvestmentGeneralInfoDto {
  @ApiProperty()
  @IsCurrency()
  @Min(0)
  @IsNotEmpty()
  totalValue: number;
  @ApiProperty()
  @IsCurrency()
  @Min(0)
  @IsNotEmpty()
  initialFee: number;
}
