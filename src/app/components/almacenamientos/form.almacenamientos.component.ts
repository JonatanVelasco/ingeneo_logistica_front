import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Almacenamiento } from 'src/app/models/almacenamiento';
import { TipoAlmacenamiento } from 'src/app/models/tipoAlmacenamiento';
import { AlmacenamientoService } from 'src/app/services/almacenamiento.service';
import { TipoAlmacenamientoService } from 'src/app/services/tipoAlmacenamiento.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-almacenamientos',
  templateUrl: './form.almacenamientos.component.html'

})
export class FormAlmacenamientosComponent implements OnInit {

  public almacenamiento: Almacenamiento = new Almacenamiento;
  public titulo:string = "Crear Almacenamientos"
  public tiposAlmacenamientos: TipoAlmacenamiento[] = [];

  constructor(private almacenamientoService: AlmacenamientoService,
  private router: Router,
  private activatedRoute: ActivatedRoute,
  private tipoAlmacenamientoService: TipoAlmacenamientoService) { 
    this.tipoAlmacenamientoService.getTipoAlmacenamientos().subscribe(
      tiposAlmacenamientos => this.tiposAlmacenamientos = tiposAlmacenamientos
    );
  }

  ngOnInit() {
    this.cargarAlmacenamiento()
  }

  cargarAlmacenamiento(): void{
    this.activatedRoute.params
      .subscribe(params => {
          let id = params['id']
          if(id){
            this.almacenamientoService.getAlmacenamiento(id).subscribe( (almacenamiento) => this.almacenamiento = almacenamiento)
          }
        },
        (err : HttpErrorResponse)=>{
          swal('Error ' + err.status, `Tuvimos problemas al realizar la operacion!  . Intente de nuevo o contacte al administrador del sitio`, 'error')
        }
      );
  }

  create(): void {
    this.almacenamientoService.create(this.almacenamiento)
      .subscribe(almacenamiento => {
        this.router.navigate(['/almacenamientos'])
        swal('Nuevo almacenamiento', `Almacenamiento ${almacenamiento.nombre} creado con éxito!`, 'success')
      },
      (err : HttpErrorResponse)=>{
        swal('Error ' + err.status, `Tuvimos problemas al realizar la operacion!  . Intente de nuevo o contacte al administrador del sitio`, 'error')
      }
    );
  }

  update():void{
    this.almacenamientoService.update(this.almacenamiento)
      .subscribe( almacenamiento => {
        this.router.navigate(['/almacenamientos'])
        swal('Almacenamiento Actualizado', `Almacenamiento ${almacenamiento.nombre} actualizado con éxito!`, 'success')
      },
      (err : HttpErrorResponse)=>{
        swal('Error ' + err.status, `Tuvimos problemas al realizar la operacion!  . Intente de nuevo o contacte al administrador del sitio`, 'error')
      }

    );
  }

}