import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductoRoutingModule } from './producto-routing.module';
import { ProductoComponent } from './pages/producto/producto.component';
import { BuzosComponent } from './pages/buzos/buzos.component';
import { RemerasComponent } from './pages/remeras/remeras.component';

import { CardComponent } from './components/card/card.component';
import { CardBuzosComponent } from './components/card-buzos/card-buzos.component';
import { CarruselComponent } from './components/carrusel/carrusel.component'



@NgModule({
  declarations: [
    ProductoComponent,
    BuzosComponent,
    RemerasComponent,
    CardComponent,
    CardBuzosComponent,
    CarruselComponent,
  ],

  imports: [
    CommonModule,
    ProductoRoutingModule,
  
],
  exports:[
    ProductoComponent,
    BuzosComponent,
    RemerasComponent,
    CardComponent,
    CardBuzosComponent
  ]

})
export class ProductoModule { }
