export class Cliente {
    id: number;
    nombres: string;
    apellidos:string;
    documento:string;
    telefono:string;
    correo: string;

    constructor(){
      this.id = 0;
      this.nombres = '';
      this.apellidos = '';
      this.documento = '';
      this.telefono = '';
      this.correo = '';
    }

    public set value(id : number) {
      this.id = id;
    }
}
