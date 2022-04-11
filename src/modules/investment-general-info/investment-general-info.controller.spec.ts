import { Test, TestingModule } from '@nestjs/testing';
import { InvestmentGeneralInfoController } from './investment-general-info.controller';
import { InvestmentGeneralInfoService } from './investment-general-info.service';

describe('InvestmentGeneralInfoController', () => {
  let controller: InvestmentGeneralInfoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [InvestmentGeneralInfoController],
      providers: [InvestmentGeneralInfoService],
    }).compile();

    controller = module.get<InvestmentGeneralInfoController>(InvestmentGeneralInfoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
