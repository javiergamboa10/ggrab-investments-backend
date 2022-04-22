import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Put,
  Query,
} from '@nestjs/common';
import { InvestorsService } from './investors.service';
import { CreateInvestorDto } from './dto/create-investor.dto';
import { UpdateInvestorDto } from './dto/update-investor.dto';
import { ApiCreatedResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { InvestorViewDto } from './dto/investor.view.dto';
import { DeleteResult } from 'typeorm';
import { IPaginationModel } from '../../shared/paginate.model';
import { ApiPaginatedResponse } from '../../shared/decorators/api-paginated-response';

@ApiTags('Investors')
@Controller('investors')
export class InvestorsController {
  constructor(private readonly _investorsService: InvestorsService) {}

  @Post()
  @ApiCreatedResponse({ type: InvestorViewDto })
  create(
    @Body() createInvestorDto: CreateInvestorDto,
  ): Promise<InvestorViewDto> {
    return this._investorsService.create(createInvestorDto);
  }

  @Put(':id')
  @ApiOkResponse({ type: InvestorViewDto })
  update(
    @Param('id') id: string,
    @Body() updateInvestorDto: UpdateInvestorDto,
  ): Promise<InvestorViewDto> {
    return this._investorsService.update(+id, updateInvestorDto);
  }

  @Delete(':id')
  @ApiOkResponse({ type: DeleteResult })
  remove(@Param('id') id: string): Promise<DeleteResult> {
    return this._investorsService.remove(id);
  }

  @Get()
  @ApiPaginatedResponse(InvestorViewDto)
  findAll(
    @Query('page') page: number,
    @Query('limit') itemsPerPage: number,
  ): Promise<IPaginationModel<InvestorViewDto>> {
    return this._investorsService.findAll(page, itemsPerPage);
  }

  @Get(':id')
  @ApiOkResponse({ type: InvestorViewDto })
  findOne(@Param('id') id: string): Promise<InvestorViewDto> {
    return this._investorsService.findOne(id);
  }
}
