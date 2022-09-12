import { Component, OnInit } from '@angular/core';
import { Rol } from 'src/app/models/rol';
import { RolService } from 'src/app/services/rol.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-roles',
  templateUrl: './roles.component.html',
  styleUrls: ['./roles.component.css']
})
export class RolesComponent implements OnInit {

  roles: Rol[];

  constructor(private rolService: RolService) { 
    this.roles= [];
  }

  ngOnInit() {
    this.rolService.getRoles().subscribe(
      roles => this.roles = roles
    );
  }

  delete(rol: Rol): void {
    swal({
      title: 'Está seguro?',
      text: `¿Seguro que desea eliminar al rol ${rol.nombre}?`,
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

        this.rolService.delete(rol.id).subscribe(
          response => {
            this.roles = this.roles.filter(cli => cli !== rol)
            swal(
              'Rol Eliminado!',
              `Rol ${rol.nombre} eliminado con éxito.`,
              'success'
            )
          }
        )

      }
    })
  }


}
