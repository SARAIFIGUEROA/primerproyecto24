import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InicioRoutingModule } from './inicio-routing.module';
import { Inicio1Component } from './pages/inicio1/inicio1.component';


@NgModule({
  declarations: [
    Inicio1Component
  ],
  imports: [
    CommonModule,
    InicioRoutingModule
  ]
})
export class InicioModule { }
