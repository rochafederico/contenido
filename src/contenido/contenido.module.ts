import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ContenidoService } from './contenido.service';
import { ContenidoController } from './contenido.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Contenido, ContenidoSchema } from './entities/contenido.entity';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(process.env.mongo_db),
    MongooseModule.forFeature([{ name: Contenido.name, schema: ContenidoSchema }])
  ],
  controllers: [ContenidoController],
  providers: [ContenidoService]
})
export class ContenidoModule { }
