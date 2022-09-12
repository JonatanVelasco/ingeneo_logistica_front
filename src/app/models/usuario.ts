export class Usuario {
    id: number;
    documento: string;
    nombres: string;
    apellidos:string;
    telefono:string;
    correo: string;
    username: string;
    password:string;
    fk_rol:number;

    constructor(){
      this.id = 0;
      this.nombres = '';
      this.apellidos = '';
      this.documento = '';
      this.telefono = '';
      this.correo = '';
      this.username = '';
      this.password = '';
      this.fk_rol = 0;
    }
}
