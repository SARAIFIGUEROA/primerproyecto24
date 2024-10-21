import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Inicio1Component } from './modules/inicio/pages/inicio1/inicio1.component';
//guardian para la vista de admin
import { rutaProtegidaGuard } from './guards/ruta-protegida.guard';
import { AdminComponent } from './modules/admin/pages/admin/admin.component';

//RUTAs INICIALes PRINCIPAL

const routes: Routes = [
  {
    path:"",component: Inicio1Component
  },
  {
    path: "",loadChildren:()=>import('./modules/inicio/inicio.module').then(m=>m.InicioModule)
  },
  {
    path:"", loadChildren:()=>import('./modules/producto/producto.module').then(m=>m.ProductoModule)
  },
  {
    path:"", loadChildren:()=>import('./modules/autentificacion/autentificacion.module').then(m=>m.AutentificacionModule)
  },
  {
    path: "", loadChildren:()=> import('./modules/shared/shared.module').then(m => m.SharedModule)
  },
  
  {//modificamos el path de admin con el guardian
    path:"", loadChildren:()=>import('./modules/admin/admin.module').then(m=>m.AdminModule),
    canActivate:[rutaProtegidaGuard], data:{role: 'admin'}
  },

];
 

@NgModule({
  imports: [RouterModule.forRoot(routes)],       
  exports: [RouterModule]
})
export class AppRoutingModule { }
