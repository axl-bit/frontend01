import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { GoogleMapsModule } from '@angular/google-maps';
import { httpInterceptorProviders } from './Helpers/http.interceptor';

//Barra
import { BarraComponent } from './Components/barra/barra.component';

//Pagina de inicio
import { PagInicioComponent } from './Components/pag-inicio/pag-inicio.component';

//Login
import { LoginComponent } from './Components/Login/login.component';

//profile
import { ProfileComponent } from './Components/profile/profile.component';

//Tarifario
import { TarifarioComponent } from './Components/Tarifario/tarifario.component';

//tarifa
import { ListTarifaComponent } from './Components/Tarifa/list-tarifa/list-tarifa.component';
import { EditTarifaComponent } from './Components/Tarifa/edit-tarifa/edit-tarifa.component';
import { AddTarifaComponent } from './Components/Tarifa/add-tarifa/add-tarifa.component';

//Distrito
import { ListDistritoComponent } from './Components/Distrito/list-distrito/list-distrito.component';
import { AddDistritoComponent } from './Components/Distrito/add-distrito/add-distrito.component';
import { EditDistritoComponent } from './Components/Distrito/edit-distrito/edit-distrito.component';

//Provincias
import { ListProvinciaComponent } from './Components/Provincia/list-provincia/list-provincia.component';
import { EditProvinciaComponent } from './Components/Provincia/edit-provincia/edit-provincia.component';
import { AddProvinciaComponent } from './Components/Provincia/add-provincia/add-provincia.component';

//Colaborador
import { ListColaboradorComponent } from './Components/Colaborador/list-colaborador/list-colaborador.component';
import { AddColaboradorComponent } from './Components/Colaborador/add-colaborador/add-colaborador.component';
import { EditColaboradorComponent } from './Components/Colaborador/edit-colaborador/edit-colaborador.component';


//OrdenServicio
import { ListOrdenservicioComponent } from './Components/OrdenServicio/list-ordenservicio/list-ordenservicio.component';
import { AddOrdenservicioComponent } from './Components/OrdenServicio/add-ordenservicio/add-ordenservicio.component';
import { EditOrdenservicioComponent } from './Components/OrdenServicio/edit-ordenservicio/edit-ordenservicio.component';

//Motorizado
import { AddMotorizadoComponent } from './Components/Motorizado/add-motorizado/add-motorizado.component';
import { ListMotorizadoComponent } from './Components/Motorizado/list-motorizado/list-motorizado.component';
import { EditMotorizadoComponent } from './Components/Motorizado/edit-motorizado/edit-motorizado.component';

//Orden Entrega
import { ListOrdenentregaComponent } from './Components/OrdenEntrega/list-ordenentrega/list-ordenentrega.component';
import { EditOrdenentregaComponent } from './Components/OrdenEntrega/edit-ordenentrega/edit-ordenentrega.component';

//OrdenRecojo
import { ListOrdenrecojoComponent } from './Components/OrdenRecojo/list-ordenrecojo/list-ordenrecojo.component';
import { EditOrdenrecojoComponent } from './Components/OrdenRecojo/edit-ordenrecojo/edit-ordenrecojo.component';

//automatizado
import { AddOrdenservicioautomatizadoComponent } from './Components/OrdenServicio/add-ordenservicioautomatizado/add-ordenservicioautomatizado.component';






@NgModule({
  declarations: [
    AppComponent,
    ListTarifaComponent,
    EditTarifaComponent,
    AddTarifaComponent,
    ListDistritoComponent,
    AddDistritoComponent,
    EditDistritoComponent,
    LoginComponent,
    PagInicioComponent,
    TarifarioComponent,
    ListProvinciaComponent,
    EditProvinciaComponent,
    AddProvinciaComponent,
    ProfileComponent,
    ListColaboradorComponent,
    AddColaboradorComponent,
    EditColaboradorComponent,
    BarraComponent,
    ListOrdenservicioComponent,
    AddOrdenservicioComponent,
    EditOrdenservicioComponent,
    AddMotorizadoComponent,
    ListMotorizadoComponent,
    EditMotorizadoComponent,
    ListOrdenentregaComponent,
    EditOrdenentregaComponent,
    ListOrdenrecojoComponent,
    EditOrdenrecojoComponent,
    AddOrdenservicioautomatizadoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    GoogleMapsModule
  ],
  providers: [httpInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
