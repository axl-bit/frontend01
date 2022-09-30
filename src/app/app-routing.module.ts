import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddColaboradorComponent } from './Components/Colaborador/add-colaborador/add-colaborador.component';
import { EditColaboradorComponent } from './Components/Colaborador/edit-colaborador/edit-colaborador.component';
import { ListColaboradorComponent } from './Components/Colaborador/list-colaborador/list-colaborador.component';
import { AddDistritoComponent } from './Components/Distrito/add-distrito/add-distrito.component';
import { EditDistritoComponent } from './Components/Distrito/edit-distrito/edit-distrito.component';
import { ListDistritoComponent } from './Components/Distrito/list-distrito/list-distrito.component';
import { LoginComponent } from './Components/Login/login.component';
import { AddMotorizadoComponent } from './Components/Motorizado/add-motorizado/add-motorizado.component';
import { EditMotorizadoComponent } from './Components/Motorizado/edit-motorizado/edit-motorizado.component';
import { ListMotorizadoComponent } from './Components/Motorizado/list-motorizado/list-motorizado.component';
import { EditOrdenentregaComponent } from './Components/OrdenEntrega/edit-ordenentrega/edit-ordenentrega.component';
import { ListOrdenentregaComponent } from './Components/OrdenEntrega/list-ordenentrega/list-ordenentrega.component';
import { EditOrdenrecojoComponent } from './Components/OrdenRecojo/edit-ordenrecojo/edit-ordenrecojo.component';
import { ListOrdenrecojoComponent } from './Components/OrdenRecojo/list-ordenrecojo/list-ordenrecojo.component';
import { AddOrdenservicioComponent } from './Components/OrdenServicio/add-ordenservicio/add-ordenservicio.component';
import { AddOrdenservicioautomatizadoComponent } from './Components/OrdenServicio/add-ordenservicioautomatizado/add-ordenservicioautomatizado.component';
import { EditOrdenservicioComponent } from './Components/OrdenServicio/edit-ordenservicio/edit-ordenservicio.component';
import { ListOrdenservicioComponent } from './Components/OrdenServicio/list-ordenservicio/list-ordenservicio.component';
import { PagInicioComponent } from './Components/pag-inicio/pag-inicio.component';
import { ProfileComponent } from './Components/profile/profile.component';
import { AddTarifaComponent } from './Components/Tarifa/add-tarifa/add-tarifa.component';
import { EditTarifaComponent } from './Components/Tarifa/edit-tarifa/edit-tarifa.component';
import { ListTarifaComponent } from './Components/Tarifa/list-tarifa/list-tarifa.component';
import { TarifarioComponent } from './Components/Tarifario/tarifario.component';

const routes: Routes = [

  //Home
  {path: 'Inicio', component:PagInicioComponent},
  {path: '', redirectTo: 'Inicio', pathMatch:'full'},

  //Login
  {path: 'Login', component:LoginComponent},

  //profile
  {path: 'profile', component:ProfileComponent},

  //Tarifario
  {path: 'Tarifario', component:TarifarioComponent},

  //tarifa
  {path: 'tarifas', component: ListTarifaComponent},
  {path: 'tarifas/crear', component: AddTarifaComponent},
  {path: 'tarfias/actualizar/:id', component: EditTarifaComponent},

  //Distrito
  {path: 'Distrito', component: ListDistritoComponent},
  {path: 'Distrito/crear', component: AddDistritoComponent},
  {path: 'Distrito/actualizar/:id', component: EditDistritoComponent},

  //Colaborador
  {path: 'Colaborador', component: ListColaboradorComponent},
  {path: 'Colaborador/crear', component: AddColaboradorComponent},
  {path: 'Colaborador/actualizar/:id', component: EditColaboradorComponent},

  //Motorizado
  {path: 'Motorizado', component: ListMotorizadoComponent},
  {path: 'Motorizado/crear', component: AddMotorizadoComponent},
  {path: 'Motorizado/actualizar/:id', component: EditMotorizadoComponent},

  //OrdenRecojo
  {path: 'OrdenRecojo', component: ListOrdenrecojoComponent},
  {path: 'OrdenRecojo/actualizar/:id', component: EditOrdenrecojoComponent},

  //OrdenEntrega
  {path: 'OrdenEntrega', component: ListOrdenentregaComponent},
  {path: 'OrdenEntrega/actualizar/:id', component: EditOrdenentregaComponent},

  //OrdenServicio
  {path: 'OrdenServicio', component: ListOrdenservicioComponent},
  {path: 'OrdenServicio/crear', component: AddOrdenservicioComponent},
  {path: 'OrdenServicio/actualizar/:id', component: EditOrdenservicioComponent},

  //servicio Automatizado
  {path: 'automatizado/crear', component: AddOrdenservicioautomatizadoComponent},



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
