import { Controller, Get, Param, Query } from '@nestjs/common';
import { ApiOkResponse } from '@nestjs/swagger';
import { ApiPaginatedResponse } from '../../shared/decorators/api-paginated-response';
import { IPaginationModel } from '../../shared/paginate.model';
import { IdentityTypeViewDto } from './dto/identity-type.view.dto';
import { IdentityTypesService } from './identity-types.service';

@Controller('identity-types')
export class IdentityTypesController {
  constructor(private readonly _identityTypesService: IdentityTypesService) {}

  @Get()
  @ApiPaginatedResponse(IdentityTypeViewDto)
  findAll(
    @Query('page') page: number,
    @Query('limit') itemsPerPage: number,
  ): Promise<IPaginationModel<IdentityTypeViewDto>> {
    return this._identityTypesService.findAll(page, itemsPerPage);
  }

  @Get(':id')
  @ApiOkResponse({ type: IdentityTypeViewDto })
  findOne(@Param('id') id: string): Promise<IdentityTypeViewDto> {
    return this._identityTypesService.findOne(id);
  }
}
