import { PartialType } from '@nestjs/mapped-types';
import { CreateCyptoDto } from './create-cypto.dto';

export class UpdateCyptoDto extends PartialType(CreateCyptoDto) {}
