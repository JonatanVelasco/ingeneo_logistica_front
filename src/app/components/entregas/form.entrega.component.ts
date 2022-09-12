import { Component, OnInit } from '@angular/core';
import { Entrega } from './../../models/entrega';
import { EntregaService } from './../../services/entrega.service';
import { Cliente } from './../../models/cliente';
import { ClienteService } from './../../services/cliente.service';
import { Almacenamiento } from '../../models/almacenamiento';
import { AlmacenamientoService } from '../../services/almacenamiento.service';
import {Router, ActivatedRoute} from '@angular/router'
import swal from 'sweetalert2'
import { TipoLogistica } from '../../models/tipoLogistica';
import { HttpErrorResponse } from '@angular/common/http';
import { TipoProducto } from 'src/app/models/tipoProducto';
import { TipoProductoService } from 'src/app/services/tipoProducto.service';
import { TipoLogisticaService } from 'src/app/services/tipoLogistica.service';

@Component({
  selector: 'app-form-entrega',
  templateUrl: './form.entrega.component.html'
})
export class FormEntregaComponent implements OnInit {

  public entrega: Entrega = new Entrega();
  public clientes: Cliente = new Cliente();
  public productos: TipoProducto = new TipoProducto();
  public logisticas: TipoLogistica = new TipoLogistica();
  
  public clientesList: Cliente[] = [];
  public productosList: TipoProducto[] = [];
  public almacenesList: Almacenamiento[] = [];
  public logisticasList: TipoLogistica[]=[];  

  public titulo:string = "Crear Entrega"

  constructor(private entregaService: EntregaService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private clienteService: ClienteService,
    private tipoProductoService: TipoProductoService,
    private almacenamientoService: AlmacenamientoService,
    private tipoLogisticaService: TipoLogisticaService

  ) {
      this.tipoProductoService.getTipoProductos().subscribe(
        productos => this.productosList = productos
      );

      this.tipoLogisticaService.getTipoLogisticas().subscribe(
        logisticas => this.logisticasList = logisticas
      );

      this.clienteService.getClientesToSelect().subscribe(
        clientes => this.clientesList = clientes
      );

      this.almacenamientoService.getAlmacenamientos().subscribe(
        almacenes => this.almacenesList = almacenes
      );
   }

  ngOnInit() {
    this.cargarEntrega()
  }

  cargarEntrega(): void{
    this.activatedRoute.params.subscribe(params => {
      let id = params['id']
      if(id){
        this.entregaService.getEntrega(id).subscribe( (entrega) => this.entrega = entrega)
      }
    })
  }

  create(): void {
    console.log(this.entrega);
    console.log(this.clientes);

    this.entregaService.create(this.entrega)
      .subscribe(entrega => {
        this.router.navigate(['/entregas'])
        swal('Nuevo entrega', `Entrega ${this.entrega.nro_guia} creado con éxito!`, 'success')
      },
      (err : HttpErrorResponse)=>{
        swal('Error ' + err.status, `Tuvimos problemas al realizar la operacion!  . Intente de nuevo o contacte al administrador del sitio`, 'error')
      }
    );
  }

  update():void{
    this.entregaService.update(this.entrega)
      .subscribe( entrega => {
        this.router.navigate(['/entregas'])
        swal('Entrega Actualizado', `Entrega ${this.entrega.nro_guia} actualizado con éxito!`, 'success')
      },
      (err : HttpErrorResponse)=>{
        swal('Error ' + err.status, `Tuvimos problemas al realizar la operacion!  . Intente de nuevo o contacte al administrador del sitio`, 'error')
      }
    );
  }
}
