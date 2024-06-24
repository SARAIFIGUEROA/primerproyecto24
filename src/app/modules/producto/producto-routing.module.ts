import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductoComponent } from './pages/producto/producto.component';
import { BuzosComponent } from './pages/buzos/buzos.component';
import { RemerasComponent } from './pages/remeras/remeras.component';

const routes: Routes = [
  {
    path:"producto", component:ProductoComponent
  },
  {
    path:"buzos", component:BuzosComponent
  },
  {
    path:"remeras", component:RemerasComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductoRoutingModule { }
