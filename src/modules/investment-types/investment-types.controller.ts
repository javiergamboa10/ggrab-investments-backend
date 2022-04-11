import { Controller, Get, Param } from '@nestjs/common';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';
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
  findAll(): Promise<InvestmentTypeViewDto[]> {
    return this._investmentTypesService.findAll();
  }

  @Get(':id')
  @ApiOkResponse({ type: InvestmentTypeViewDto })
  findOne(@Param('id') id: string): Promise<InvestmentTypeViewDto> {
    return this._investmentTypesService.findOne(id);
  }
}
