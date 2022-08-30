import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddDistritoComponent } from './Components/Distrito/add-distrito/add-distrito.component';
import { EditDistritoComponent } from './Components/Distrito/edit-distrito/edit-distrito.component';
import { ListDistritoComponent } from './Components/Distrito/list-distrito/list-distrito.component';
import { LoginComponent } from './Components/Login/login.component';
import { PagInicioComponent } from './Components/pag-inicio/pag-inicio.component';
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

  //Tarifario
  {path: 'Tarifario', component:TarifarioComponent},

  //tarifa
  {path: 'tarifas', component: ListTarifaComponent},
  {path: 'tarifas/crear', component: AddTarifaComponent},
  {path: 'tarfias/actualizar/:id', component: EditTarifaComponent},

  //Distrito
  {path: 'Distrito', component: ListDistritoComponent},
  {path: 'Distrito/crear', component: AddDistritoComponent},
  {path: 'Distrito/actualizar/:id', component: EditDistritoComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
