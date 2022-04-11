import { Test, TestingModule } from '@nestjs/testing';
import { InvestmentGeneralInfoService } from './investment-general-info.service';

describe('InvestmentGeneralInfoService', () => {
  let service: InvestmentGeneralInfoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [InvestmentGeneralInfoService],
    }).compile();

    service = module.get<InvestmentGeneralInfoService>(InvestmentGeneralInfoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
