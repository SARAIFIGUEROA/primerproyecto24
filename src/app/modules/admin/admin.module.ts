import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//ruteo
import { AdminRoutingModule } from './admin-routing.module';
//vista
import { AdminComponent } from './pages/admin/admin.component';
import { TableComponent } from './components/table/table.component';
//componentes para formularios y formularios reactivos
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

//marterial
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    AdminComponent,
    TableComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    //material
    MatIconModule,
  ],
  exports: [
    AdminComponent,
    TableComponent,
    FormsModule,
    ReactiveFormsModule,

    MatIconModule,]
})
export class AdminModule { }
