import { Contenido } from "../entities/contenido.entity";

export class CreateContenidoDto {
    _id: string;
    nombre: string;
    contenido: string;
    constructor(data?: Contenido) {
        this._id = data?._id;
        this.nombre = data?.nombre;
        this.contenido = data?.contenido;
    }
}
