import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductoRoutingModule } from './producto-routing.module';
import { ProductoComponent } from './pages/producto/producto.component';
import { BuzosComponent } from './pages/buzos/buzos.component';
import { RemerasComponent } from './pages/remeras/remeras.component';


@NgModule({
  declarations: [
    ProductoComponent,
    BuzosComponent,
    RemerasComponent
  ],
  imports: [
    CommonModule,
    ProductoRoutingModule
  ]
})
export class ProductoModule { }
