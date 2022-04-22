import { Controller, Get, Param, Query } from '@nestjs/common';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { IPaginationModel } from '../../shared/paginate.model';
import { InvestmentTypeViewDto } from './dto/investment-type.view.dto';
import { InvestmentTypesService } from './investment-types.service';

@ApiTags('Investment types')
@Controller('investment-types')
export class InvestmentTypesController {
  constructor(
    private readonly _investmentTypesService: InvestmentTypesService,
  ) {}

  @Get()
  @ApiOkResponse({ type: [InvestmentTypeViewDto] })
  findAll(
    @Query('page') page: number,
    @Query('limit') itemsPerPage: number,
  ): Promise<IPaginationModel<InvestmentTypeViewDto>> {
    return this._investmentTypesService.findAll(page, itemsPerPage);
  }

  @Get(':id')
  @ApiOkResponse({ type: InvestmentTypeViewDto })
  findOne(@Param('id') id: string): Promise<InvestmentTypeViewDto> {
    return this._investmentTypesService.findOne(id);
  }
}
