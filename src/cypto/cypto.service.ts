import { Injectable } from '@nestjs/common';
import { CreateCyptoDto } from './dto/create-cypto.dto';
import { UpdateCyptoDto } from './dto/update-cypto.dto';

@Injectable()
export class CyptoService {
  create(createCyptoDto: CreateCyptoDto) {
    return 'This action adds a new cypto';
  }

  findAll() {
    return `This action returns all cypto`;
  }

  findOne(id: number) {
    return `This action returns a #${id} cypto`;
  }

  update(id: number, updateCyptoDto: UpdateCyptoDto) {
    return `This action updates a #${id} cypto`;
  }

  remove(id: number) {
    return `This action removes a #${id} cypto`;
  }
}
