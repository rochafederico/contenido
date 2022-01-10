import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ContenidoDocument = Contenido & Document;

@Schema()
export class Contenido {
    _id: string;
    @Prop({ required: true })
    nombre: string;

    @Prop({ required: true })
    contenido: string;
}

export const ContenidoSchema = SchemaFactory.createForClass(Contenido);