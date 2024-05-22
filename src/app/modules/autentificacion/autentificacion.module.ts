import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AutentificacionRoutingModule } from './autentificacion-routing.module';
//componentes de material
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';

import { IniciosesionComponent } from './pages/iniciosesion/iniciosesion.component';
import { RegistroComponent } from './pages/registro/registro.component';




@NgModule({
  declarations: [
    RegistroComponent,
    IniciosesionComponent,
  ],
  imports: [
    CommonModule,
    AutentificacionRoutingModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
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
