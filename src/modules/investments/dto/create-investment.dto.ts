import { ApiProperty } from '@nestjs/swagger';
import {
  ArrayNotEmpty,
  IsArray,
  IsNotEmpty,
  IsObject,
  IsString,
} from 'class-validator';
import { CreateInvestmentFeeInfoDto } from '../../investment-fee-info/dto/create-investment-fee-info.dto';
import { CreateInvestmentGeneralInfoDto } from '../../investment-general-info/dto/create-investment-general-info.dto';

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
  @ApiProperty()
  @IsNotEmpty()
  @IsObject()
  generalInfo: CreateInvestmentGeneralInfoDto;
  @ApiProperty({ type: [CreateInvestmentFeeInfoDto] })
  @IsNotEmpty()
  @IsArray()
  @ArrayNotEmpty()
  feeInfo: CreateInvestmentFeeInfoDto[];
}
