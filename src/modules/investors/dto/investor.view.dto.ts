import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';

@Expose()
export class InvestorViewDto {
  constructor() {
    this.id = null;
    this.name = null;
    this.identity = null;
    this.identityTypeId = null;
    this.address = null;
    this.phones = null;
  }

  @ApiProperty()
  id: string;
  @ApiProperty()
  name: string;
  @ApiProperty()
  identity: string;
  @ApiProperty()
  identityTypeId: string;
  @ApiProperty()
  address: string;
  @ApiProperty()
  phones: string;
}
