import { Test, TestingModule } from '@nestjs/testing';
import { InvestmentTypesService } from './investment-types.service';

describe('InvestmentTypesService', () => {
  let service: InvestmentTypesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [InvestmentTypesService],
    }).compile();

    service = module.get<InvestmentTypesService>(InvestmentTypesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
