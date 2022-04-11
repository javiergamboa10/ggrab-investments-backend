import { Test, TestingModule } from '@nestjs/testing';
import { InvestmentFeeInfoService } from './investment-fee-info.service';

describe('InvestmentFeeInfoService', () => {
  let service: InvestmentFeeInfoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [InvestmentFeeInfoService],
    }).compile();

    service = module.get<InvestmentFeeInfoService>(InvestmentFeeInfoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
