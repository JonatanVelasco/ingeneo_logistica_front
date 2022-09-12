import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth/auth.guards';
import { ClientesComponent } from './components/clientes/clientes.component';
import { FormClientesComponent} from './components/clientes/form.clientes.component';
import { EntregasComponent } from './components/entregas/entregas.component';
import { FormEntregaComponent } from './components/entregas/form.entrega.component';
import { HomeComponent } from './components/home/home.component';
import { RolesComponent } from './components/roles/roles.component';
import { FormRolesComponent } from './components/roles/form.roles.component';
import { TipoProductosComponent } from './components/tipo-productos/tipo-productos.component';
import { FormTipoProductosComponent } from './components/tipo-productos/form.tipo-productos.component';
import { AlmacenamientosComponent } from './components/almacenamientos/almacenamientos.component';
import { FormAlmacenamientosComponent } from './components/almacenamientos/form.almacenamientos.component';
import { SignInComponent } from './components/usuarios/sing-in/sing-in.component';
import { UsuariosComponent } from './components/usuarios/usuarios.component';
import { FormUsuarioComponent } from './components/usuarios/form.usuario.component';


const routes: Routes = [
  {path: '', redirectTo: '/login', pathMatch: 'full'},
  {path: 'login', component: SignInComponent},
  {path: 'home', component: HomeComponent, canActivate:[AuthGuard] },

  {path: 'usuarios', component: UsuariosComponent},
  {path: 'usuarios/form', component: FormUsuarioComponent},
  {path: 'usuarios/form/:id', component: FormUsuarioComponent},

  // {path: 'home', component: HomeComponent},

  {path: 'clientes', component: ClientesComponent},
  {path: 'clientes/form', component: FormClientesComponent},
  {path: 'clientes/form/:id', component: FormClientesComponent},

  {path: 'entregas', component: EntregasComponent},
  {path: 'entregas/form', component: FormEntregaComponent},
  {path: 'entregas/form/:id', component: FormEntregaComponent},

  {path: 'roles', component: RolesComponent},
  {path: 'roles/form', component: FormRolesComponent},
  {path: 'roles/form/:id', component: FormRolesComponent},

  {path: 'tipoProductos', component: TipoProductosComponent},
  {path: 'tipoProductos/form', component: FormTipoProductosComponent},
  {path: 'tipoProductos/form/:id', component: FormTipoProductosComponent},

  {path: 'almacenamientos', component: AlmacenamientosComponent},
  {path: 'almacenamientos/form', component: FormAlmacenamientosComponent},
  {path: 'almacenamientos/form/:id', component: FormAlmacenamientosComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
