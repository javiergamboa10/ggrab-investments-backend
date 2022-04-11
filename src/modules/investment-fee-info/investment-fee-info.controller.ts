import { Controller, Get, Param, Query } from '@nestjs/common';
import { InvestmentFeeInfoService } from './investment-fee-info.service';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { InvestmentFeeInfoViewDto } from './dto/investment-fee-info.view.dto';
import { ApiPaginatedResponse } from '../../shared/decorators/api-paginated-response';
import { IPaginationModel } from '../../shared/paginate.model';

@ApiTags('Investment fee info')
@Controller('investment-fee-info')
export class InvestmentFeeInfoController {
  constructor(
    private readonly _investmentFeeInfoService: InvestmentFeeInfoService,
  ) {}

  @Get('investments/:id')
  @ApiPaginatedResponse(InvestmentFeeInfoViewDto)
  findByInvestmentId(
    @Param('id') id: string,
    @Query('page') page: number,
    @Query('limit') itemsPerPage: number,
  ): Promise<IPaginationModel<InvestmentFeeInfoViewDto>> {
    return this._investmentFeeInfoService.findByInvestmentId(
      id,
      page,
      itemsPerPage,
    );
  }

  @Get(':id')
  @ApiOkResponse({ type: InvestmentFeeInfoViewDto })
  findOne(@Param('id') id: string): Promise<InvestmentFeeInfoViewDto> {
    return this._investmentFeeInfoService.findOne(id);
  }
}
