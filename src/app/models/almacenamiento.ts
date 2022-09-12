
export class Almacenamiento {
    id: number;
    nombre: string;
    descripcion:string;
    ubicacion:string;
    fk_tipo_almacenamiento: number;
    nombretipoalmacenamiento: string;
    
    
    constructor(){
      this.id = 0;
      this.nombre = '';
      this.descripcion = '';
      this.fk_tipo_almacenamiento = 0;
      this.ubicacion = '';
      this.nombretipoalmacenamiento= '';
    }
}
