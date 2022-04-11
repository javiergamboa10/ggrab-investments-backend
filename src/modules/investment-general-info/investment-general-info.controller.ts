import { Controller, Get, Param } from '@nestjs/common';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { InvestmentGeneralInfoViewDto } from './dto/investment-general-info.view.dto';
import { InvestmentGeneralInfoService } from './investment-general-info.service';

@ApiTags('Investment general info')
@Controller('investment-general-info')
export class InvestmentGeneralInfoController {
  constructor(
    private readonly _investmentGeneralInfoService: InvestmentGeneralInfoService,
  ) {}

  @Get('investments/:id')
  @ApiOkResponse({ type: InvestmentGeneralInfoViewDto })
  findByInvestmentId(
    @Param('id') id: string,
  ): Promise<InvestmentGeneralInfoViewDto> {
    return this._investmentGeneralInfoService.findByInvestmentId(id);
  }

  @Get(':id')
  @ApiOkResponse({ type: InvestmentGeneralInfoViewDto })
  findOne(@Param('id') id: string): Promise<InvestmentGeneralInfoViewDto> {
    return this._investmentGeneralInfoService.findOne(id);
  }
}
