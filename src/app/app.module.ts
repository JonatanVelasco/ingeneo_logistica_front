import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ClientesComponent } from './components/clientes/clientes.component';
import { ClienteService } from './services/cliente.service';
import { GlobalService } from './services/global.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormClientesComponent } from './components/clientes/form.clientes.component';
import { EntregasComponent } from './components/entregas/entregas.component';
import { EntregasDetailsComponent } from './components/entregas/entregas.details.component';
import { FormEntregaComponent } from './components/entregas/form.entrega.component';
import { RolesComponent } from './components/roles/roles.component';
import { FormRolesComponent } from './components/roles/form.roles.component';
import { RolService } from './services/rol.service';
import { AlmacenamientoService } from './services/almacenamiento.service';
import { EntregaService } from './services/entrega.service';
import { TipoProductosComponent } from './components/tipo-productos/tipo-productos.component';
import { TipoProductoService } from './services/tipoProducto.service';
import { TipoAlmacenamientoService } from './services/tipoAlmacenamiento.service';
import { TipoLogisticaService } from './services/tipoLogistica.service';
import { FormTipoProductosComponent } from './components/tipo-productos/form.tipo-productos.component';
import { AlmacenamientosComponent } from './components/almacenamientos/almacenamientos.component';
import { FormAlmacenamientosComponent } from './components/almacenamientos/form.almacenamientos.component';
import { FormUsuarioComponent } from './components/usuarios/form.usuario.component';
import { SignInComponent } from './components/usuarios/sing-in/sing-in.component';
import { HomeComponent } from './components/home/home.component';
import { UserService } from './shared/user.service';
import { UsuarioService } from './services/usuario.service';
import { UsuariosComponent } from './components/usuarios/usuarios.component';
import { AuthGuard } from './auth/auth.guards';
import { AuthInterceptor } from './auth/auth.interceptor';

@NgModule({
  declarations: [
    ClientesComponent,
    HeaderComponent,
    FooterComponent,
    AppComponent,
    FormClientesComponent,
    EntregasComponent,
    EntregasDetailsComponent,
    FormEntregaComponent,
    RolesComponent,
    FormRolesComponent,
    TipoProductosComponent,
    FormTipoProductosComponent,
    AlmacenamientosComponent,
    FormAlmacenamientosComponent,
    UsuariosComponent,
    FormUsuarioComponent,
    SignInComponent,
    HomeComponent
   
 
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    ClienteService,
    RolService,
    AlmacenamientoService,
    EntregaService,
    TipoProductoService,
    TipoAlmacenamientoService,
    TipoLogisticaService,
    GlobalService,
    UsuarioService,
    UserService,
    AuthGuard,
    {
      provide : HTTP_INTERCEPTORS,
      useClass : AuthInterceptor,
      multi : true
    }
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
