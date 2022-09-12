import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Rol } from 'src/app/models/rol';
import { RolService } from 'src/app/services/rol.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-form.roles',
  templateUrl: './form.roles.component.html',
  styleUrls: ['./form.roles.component.css']
})
export class FormRolesComponent implements OnInit {

  public rol: Rol = new Rol;
  public titulo:string = "Crear Rol"

  constructor(private rolService: RolService,
  private router: Router,
  private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.cargarRol()
  }

  cargarRol(): void{
    this.activatedRoute.params
      .subscribe(params => {
          let id = params['id']
          if(id){
            this.rolService.getRol(id).subscribe( (rol) => this.rol = rol)
          }
        },
        (err : HttpErrorResponse)=>{
          swal('Error ' + err.status, `Tuvimos problemas al realizar la operacion!  . Intente de nuevo o contacte al administrador del sitio`, 'error')
        }
      );
  }

  create(): void {
    this.rolService.create(this.rol)
      .subscribe(rol => {
        this.router.navigate(['/roles'])
        swal('Nuevo rol', `Rol ${rol.nombre} creado con éxito!`, 'success')
      },
      (err : HttpErrorResponse)=>{
        swal('Error ' + err.status, `Tuvimos problemas al realizar la operacion!  . Intente de nuevo o contacte al administrador del sitio`, 'error')
      }
    );
  }

  update():void{
    this.rolService.update(this.rol)
      .subscribe( rol => {
        this.router.navigate(['/roles'])
        swal('Rol Actualizado', `Rol ${rol.nombre} actualizado con éxito!`, 'success')
      },
      (err : HttpErrorResponse)=>{
        swal('Error ' + err.status, `Tuvimos problemas al realizar la operacion!  . Intente de nuevo o contacte al administrador del sitio`, 'error')
      }

    );
  }

}
