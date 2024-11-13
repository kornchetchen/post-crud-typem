import { Test, TestingModule } from '@nestjs/testing';
import { CyptoController } from './cypto.controller';
import { CyptoService } from './cypto.service';

describe('CyptoController', () => {
  let controller: CyptoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CyptoController],
      providers: [CyptoService],
    }).compile();

    controller = module.get<CyptoController>(CyptoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
