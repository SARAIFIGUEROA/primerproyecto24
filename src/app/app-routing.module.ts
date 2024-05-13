import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Inicio1Component } from './modules/inicio/pages/inicio1/inicio1.component';

//RUTA INICIAL PRINCIPAL

const routes: Routes = [
  
  {
    path:"",component: Inicio1Component
  },
  {
    path: "",loadChildren:()=>import('./modules/inicio/inicio.module').then(m=>m.InicioModule)
  },
  {
    path:"", loadChildren:()=>import('./modules/producto/producto.module').then(m=>m.ProductoModule)
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
