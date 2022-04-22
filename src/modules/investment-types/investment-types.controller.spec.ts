import { Test, TestingModule } from '@nestjs/testing';
import { InvestmentTypesController } from './investment-types.controller';
import { InvestmentTypesService } from './investment-types.service';

describe('InvestmentTypesController', () => {
  let controller: InvestmentTypesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [InvestmentTypesController],
      providers: [InvestmentTypesService],
    }).compile();

    controller = module.get<InvestmentTypesController>(
      InvestmentTypesController,
    );
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
