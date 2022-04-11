import { ApiProperty } from '@nestjs/swagger';
import { IsCurrency, IsDate, IsNotEmpty, Min } from 'class-validator';

export class CreateInvestmentFeeInfoDto {
  @ApiProperty()
  @IsNotEmpty()
  description: string;
  @ApiProperty()
  @IsNotEmpty()
  @IsDate()
  dueDate: number;
  @ApiProperty()
  @IsNotEmpty()
  @IsCurrency()
  @Min(0)
  feeValue: number;
}
