import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//importamos shared
import { SharedModule } from './modules/shared/shared.module';

//firebase
import { enviroment } from 'src/enviroments/enviroment'; // vincula la BD a la app
import { AngularFireModule } from '@angular/fire/compat'; // trabaja con las colecciones de la informacion
import { AngularFireAuthModule } from '@angular/fire/compat/auth'; // trabaja con la autentificacion
import {AngularFireStorageModule } from '@angular/fire/compat/storage' // trabaja con imagenes y archivos


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './iniciosinuso/inicio.component';
import { GaleriaComponent } from './galeria/galeria.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AdminModule } from "./modules/admin/admin.module";

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    GaleriaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    //firebase vinc
    //
    AngularFireModule.initializeApp(enviroment.firebaseConfig),
    AngularFireStorageModule,
    AngularFireAuthModule,
    AdminModule
],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
