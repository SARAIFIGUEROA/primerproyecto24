import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Inicio1Component } from './pages/inicio1/inicio1.component';


//RUTAS HIJAS DEL MODULO INICIO

const routes: Routes = [

  { path: "", component: Inicio1Component },
  { path: "inicio", component:Inicio1Component},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InicioRoutingModule { }
