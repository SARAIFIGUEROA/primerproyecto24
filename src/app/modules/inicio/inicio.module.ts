import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InicioRoutingModule } from './inicio-routing.module';
import { Inicio1Component } from './pages/inicio1/inicio1.component';
/*COMPONENTE LOCAL */
import { CardComponent } from './components/card/card.component';
//componentes de material
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';


@NgModule({
  declarations: [
    Inicio1Component,
    CardComponent
  ],
  imports: [
    CommonModule,
    InicioRoutingModule,
    MatButtonModule,
    MatCardModule,
  ]
})
export class InicioModule { }
