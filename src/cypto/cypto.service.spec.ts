import { Test, TestingModule } from '@nestjs/testing';
import { CyptoService } from './cypto.service';

describe('CyptoService', () => {
  let service: CyptoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CyptoService],
    }).compile();

    service = module.get<CyptoService>(CyptoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
