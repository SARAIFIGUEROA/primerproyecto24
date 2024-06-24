import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AutentificacionRoutingModule } from './autentificacion-routing.module';
//componentes de material
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import {MatSelectModule} from '@angular/material/select';

import { IniciosesionComponent } from './pages/iniciosesion/iniciosesion.component';
import { RegistroComponent } from './pages/registro/registro.component';
//modulo para formularios
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    RegistroComponent,
    IniciosesionComponent,
  ],
  imports: [
    CommonModule,
    AutentificacionRoutingModule,
    // componentes de material
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    //angular
    FormsModule,

  ],

  exports:[
    RegistroComponent,
    IniciosesionComponent,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
  ]
  
})
export class AutentificacionModule { }
