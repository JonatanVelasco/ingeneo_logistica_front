import { Component, OnInit } from '@angular/core';
import { Almacenamiento } from 'src/app/models/almacenamiento';
import { AlmacenamientoService } from 'src/app/services/almacenamiento.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-almacenamientos',
  templateUrl: './almacenamientos.component.html'
})
export class AlmacenamientosComponent implements OnInit {

  almacenamientos: Almacenamiento[];

  constructor(private almacenamientoService: AlmacenamientoService) { 
    this.almacenamientos= [];
  }

  ngOnInit() {
    this.almacenamientoService.getAlmacenamientos().subscribe(
      almacenamientos => this.almacenamientos = almacenamientos
    );
  }

  delete(almacenamiento: Almacenamiento): void {
    swal({
      title: 'Está seguro?',
      text: `¿Seguro que desea eliminar al almacenamiento ${almacenamiento.nombre}?`,
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

        this.almacenamientoService.delete(almacenamiento.id).subscribe(
          response => {
            this.almacenamientos = this.almacenamientos.filter(cli => cli !== almacenamiento)
            swal(
              'Almacenamiento Eliminado!',
              `Almacenamiento ${almacenamiento.nombre} eliminado con éxito.`,
              'success'
            )
          }
        )

      }
    })
  }


}
