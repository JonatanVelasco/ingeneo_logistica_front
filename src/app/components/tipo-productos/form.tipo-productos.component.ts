import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TipoProducto } from 'src/app/models/tipoProducto';
import { TipoProductoService } from 'src/app/services/tipoProducto.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-form-tipo-productos',
  templateUrl: './form.tipo-productos.component.html'

})
export class FormTipoProductosComponent implements OnInit {

  public tipoProducto: TipoProducto = new TipoProducto;
  public titulo:string = "Crear Tipo de Productos"

  constructor(private tipoProductoService: TipoProductoService,
  private router: Router,
  private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.cargarTipoProducto()
  }

  cargarTipoProducto(): void{
    this.activatedRoute.params
      .subscribe(params => {
          let id = params['id']
          if(id){
            this.tipoProductoService.getTipoProducto(id).subscribe( (tipoProducto) => this.tipoProducto = tipoProducto)
          }
        },
        (err : HttpErrorResponse)=>{
          swal('Error ' + err.status, `Tuvimos problemas al realizar la operacion!  . Intente de nuevo o contacte al administrador del sitio`, 'error')
        }
      );
  }

  create(): void {
    this.tipoProductoService.create(this.tipoProducto)
      .subscribe(tipoProducto => {
        this.router.navigate(['/tipoProductos'])
        swal('Nuevo tipoProducto', `TipoProducto ${tipoProducto.descripcion} creado con éxito!`, 'success')
      },
      (err : HttpErrorResponse)=>{
        swal('Error ' + err.status, `Tuvimos problemas al realizar la operacion!  . Intente de nuevo o contacte al administrador del sitio`, 'error')
      }
    );
  }

  update():void{
    this.tipoProductoService.update(this.tipoProducto)
      .subscribe( tipoProducto => {
        this.router.navigate(['/tipoProductos'])
        swal('TipoProducto Actualizado', `TipoProducto ${tipoProducto.descripcion} actualizado con éxito!`, 'success')
      },
      (err : HttpErrorResponse)=>{
        swal('Error ' + err.status, `Tuvimos problemas al realizar la operacion!  . Intente de nuevo o contacte al administrador del sitio`, 'error')
      }

    );
  }

}