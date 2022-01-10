import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ContenidoModule } from './contenido/contenido.module';

@Module({
  imports: [ContenidoModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
