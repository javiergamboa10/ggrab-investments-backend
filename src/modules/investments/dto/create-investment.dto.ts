import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateInvestmentDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  description: string;
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  location: string;
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  invesmentTypeId: string;
}
