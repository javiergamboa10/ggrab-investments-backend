import { Test, TestingModule } from '@nestjs/testing';
import { InvestmentFeeInfoController } from './investment-fee-info.controller';
import { InvestmentFeeInfoService } from './investment-fee-info.service';

describe('InvestmentFeeInfoController', () => {
  let controller: InvestmentFeeInfoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [InvestmentFeeInfoController],
      providers: [InvestmentFeeInfoService],
    }).compile();

    controller = module.get<InvestmentFeeInfoController>(InvestmentFeeInfoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
