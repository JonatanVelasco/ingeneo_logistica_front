export class Entrega {

    id: number;
    cant_producto: number;
    descuento: number;
    fecha_entrega: string;
    fecha_registro: string;
    nro_transporte: string;
    nro_guia: string;
    precio_envio: number;
    fk_cliente: number;
    nombreCliente: string;
    apellidoCliente: string;
    fk_tipo_logistica: number;
    nombreTipoLogistica: string;
    fk_tipo_producto: number;
    nombreTipoProducto: string;
    fk_almacenamiento: number;
    nombreAlmacenamiento: string;


    
    constructor(){
        this.id = 0;
        this.cant_producto = 0;
        this.descuento = 0;
        this.fecha_entrega = '';
        this.fecha_registro = '';
        this.nro_transporte = '';
        this.nro_guia = '';
        this.precio_envio = 0;
        this.fk_cliente =  0;
        this.nombreCliente = '';
        this.apellidoCliente = '';
        this.fk_tipo_logistica =  0;
        this.nombreTipoLogistica = '';
        this.fk_tipo_producto =  0;
        this.nombreTipoProducto = '';
        this.fk_almacenamiento =  0;
        this.nombreAlmacenamiento = '';
        
    }
}
