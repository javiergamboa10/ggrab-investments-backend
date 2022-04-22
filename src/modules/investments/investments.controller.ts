import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
  Query,
} from '@nestjs/common';
import { InvestmentsService } from './investments.service';
import { CreateInvestmentDto } from './dto/create-investment.dto';
import { UpdateInvestmentDto } from './dto/update-investment.dto';
import { InvestmentViewDto } from './dto/investment.view.dto';
import { DeleteResult } from 'typeorm';
import { ApiCreatedResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { ApiPaginatedResponse } from '../../shared/decorators/api-paginated-response';
import { IPaginationModel } from '../../shared/paginate.model';
import { CreateInvestmentInteractor } from './interactor/create-investment.interactor';

@ApiTags('Investments')
@Controller('investments')
export class InvestmentsController {
  constructor(
    private readonly _investmentsService: InvestmentsService,
    private readonly _createInvestmentInteractor: CreateInvestmentInteractor,
  ) {}

  @Post()
  @ApiCreatedResponse({ type: InvestmentViewDto })
  create(
    @Body() createInvestmentDto: CreateInvestmentDto,
  ): Promise<InvestmentViewDto> {
    return this._createInvestmentInteractor.create(createInvestmentDto);
  }

  @Put(':id')
  @ApiOkResponse({ type: InvestmentViewDto })
  update(
    @Param('id') id: string,
    @Body() updateInvestmentDto: UpdateInvestmentDto,
  ): Promise<InvestmentViewDto> {
    return this._investmentsService.update(+id, updateInvestmentDto);
  }

  @Delete(':id')
  @ApiOkResponse({ type: DeleteResult })
  remove(@Param('id') id: string): Promise<DeleteResult> {
    return this._investmentsService.remove(id);
  }

  @Get()
  @ApiPaginatedResponse(InvestmentViewDto)
  findAll(
    @Query('page') page: number,
    @Query('limit') itemsPerPage: number,
  ): Promise<IPaginationModel<InvestmentViewDto>> {
    return this._investmentsService.findAll(page, itemsPerPage);
  }

  @Get(':id')
  @ApiOkResponse({ type: InvestmentViewDto })
  findOne(@Param('id') id: string): Promise<InvestmentViewDto> {
    return this._investmentsService.findOne(id);
  }
}
