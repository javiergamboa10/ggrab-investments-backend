import { Test, TestingModule } from '@nestjs/testing';
import { IdentityTypesController } from './identity-types.controller';
import { IdentityTypesService } from './identity-types.service';

describe('IdentityTypesController', () => {
  let controller: IdentityTypesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [IdentityTypesController],
      providers: [IdentityTypesService],
    }).compile();

    controller = module.get<IdentityTypesController>(IdentityTypesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
