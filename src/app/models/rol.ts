export class Rol {
    id: number;
    nombre: string;
  

    constructor(){
      this.id = 0;
      this.nombre = '';
     
    }

    public set value(id : number) {
      this.id = id;
    }
}
