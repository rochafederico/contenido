import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateContenidoDto } from './dto/create-contenido.dto';
import { UpdateContenidoDto } from './dto/update-contenido.dto';
import { Contenido, ContenidoDocument } from './entities/contenido.entity';

@Injectable()
export class ContenidoService {
  constructor(@InjectModel(Contenido.name) private contenidoModel: Model<ContenidoDocument>) { }
  create(createContenidoDto: CreateContenidoDto) {
    const createdContenido = new this.contenidoModel(createContenidoDto);
    return createdContenido.save();
  }

  async findAll() {
    const result = await this.contenidoModel.find().exec();
    return result.map(x => new CreateContenidoDto(x));
  }

  async findOne(_id: string) {
    const result = await this.contenidoModel.findById(_id).exec();
    return new CreateContenidoDto(result);
  }

  async update(_id: string, updateContenidoDto: UpdateContenidoDto) {
    await this.contenidoModel.updateOne(
      { "_id": _id }, // Filter
      {
        "nombre": updateContenidoDto.nombre,
        "contenido": updateContenidoDto.contenido
      } // Update
    ).exec();
    return true;
  }

  async remove(_id: string) {
    await this.contenidoModel.remove({ "_id": _id }).exec();
    return true;
  }
}
