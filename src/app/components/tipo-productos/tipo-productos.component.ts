import { Component, OnInit } from '@angular/core';
import { TipoProducto } from 'src/app/models/tipoProducto';
import { TipoProductoService } from 'src/app/services/tipoProducto.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-tipo-productos',
  templateUrl: './tipo-productos.component.html',
  styleUrls: ['./tipo-productos.component.css']
})
export class TipoProductosComponent implements OnInit {

  tipoProductos: TipoProducto[];

  constructor(private tipoProductoService: TipoProductoService) { 
    this.tipoProductos= [];
  }

  ngOnInit() {
    this.tipoProductoService.getTipoProductos().subscribe(
      tipoProductos => this.tipoProductos = tipoProductos
    );
  }

  delete(tipoProducto: TipoProducto): void {
    swal({
      title: 'Está seguro?',
      text: `¿Seguro que desea eliminar al tipoProducto ${tipoProducto.descripcion}?`,
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, eliminar!',
      cancelButtonText: 'No, cancelar!',
      confirmButtonClass: 'btn btn-success',
      cancelButtonClass: 'btn btn-danger',
      buttonsStyling: false,
      reverseButtons: true
    }).then((result) => {
      if (result.value) {

        this.tipoProductoService.delete(tipoProducto.id).subscribe(
          response => {
            this.tipoProductos = this.tipoProductos.filter(cli => cli !== tipoProducto)
            swal(
              'TipoProducto Eliminado!',
              `TipoProducto ${tipoProducto.descripcion} eliminado con éxito.`,
              'success'
            )
          }
        )

      }
    })
  }


}
