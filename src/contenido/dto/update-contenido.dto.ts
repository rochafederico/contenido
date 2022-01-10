import { PartialType } from '@nestjs/swagger';
import { CreateContenidoDto } from './create-contenido.dto';

export class UpdateContenidoDto extends PartialType(CreateContenidoDto) {}
