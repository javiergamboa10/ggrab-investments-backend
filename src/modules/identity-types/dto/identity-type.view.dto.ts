import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';

@Expose()
export class IdentityTypeViewDto {
  constructor() {
    this.id = null;
    this.description = null;
    this.code = null;
  }

  @ApiProperty()
  id: string;
  @ApiProperty()
  description: string;
  @ApiProperty()
  code: number;
}
