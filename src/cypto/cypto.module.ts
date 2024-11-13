import { Module } from '@nestjs/common';
import { CyptoService } from './cypto.service';
import { CyptoController } from './cypto.controller';

@Module({
  controllers: [CyptoController],
  providers: [CyptoService],
})
export class CyptoModule {}
