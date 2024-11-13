import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CyptoService } from './cypto.service';
import { CreateCyptoDto } from './dto/create-cypto.dto';
import { UpdateCyptoDto } from './dto/update-cypto.dto';

@Controller('cypto')
export class CyptoController {
  constructor(private readonly cyptoService: CyptoService) {}

  @Post()
  create(@Body() createCyptoDto: CreateCyptoDto) {
    return this.cyptoService.create(createCyptoDto);
  }

  @Get()
  findAll() {
    return this.cyptoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.cyptoService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCyptoDto: UpdateCyptoDto) {
    return this.cyptoService.update(+id, updateCyptoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.cyptoService.remove(+id);
  }
}
