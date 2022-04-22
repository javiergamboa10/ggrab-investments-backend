import { Test, TestingModule } from '@nestjs/testing';
import { IdentityTypesService } from './identity-types.service';

describe('IdentityTypesService', () => {
  let service: IdentityTypesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [IdentityTypesService],
    }).compile();

    service = module.get<IdentityTypesService>(IdentityTypesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
