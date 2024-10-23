import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//importamos shared
import { SharedModule } from './modules/shared/shared.module';

//firebase
import { enviroment } from 'src/enviroments/enviroment'; // vincula la BD a la app
import { AngularFireModule } from '@angular/fire/compat'; // trabaja con las colecciones de la informacion
import { AngularFireAuthModule } from '@angular/fire/compat/auth'; // trabaja con la autentificacion
import {AngularFireStorageModule } from '@angular/fire/compat/storage' // trabaja con imagenes y archivos

//modulos
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent,
    ],
    
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    //firebase vinculacion para inicializar la bd
    AngularFireModule.initializeApp(enviroment.firebaseConfig),
    AngularFireStorageModule,
    AngularFireAuthModule,
    
],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
