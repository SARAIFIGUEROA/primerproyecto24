import { Component } from '@angular/core';
import { Producto } from 'src/app/models/producto';
import { CrudService } from '../../services/crud.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})  
export class TableComponent {
  //creamos colecvcion local de productos  -> la definimos como array
coleccionproductos: Producto[]=[];
/*atributos alfanumericos (string) se inicializa con comilla simple
atributos numericos (number) se iniucializan con 0 ('0')*/

//definimos formuklarios para los productos 
producto=new FormGroup({
  nombre: new FormControl('', Validators.required),
  precio:new FormControl(0, Validators.required),
  descripcion:new FormControl('', Validators.required),
  categoria:new FormControl('', Validators.required),
  imagen:new FormControl('', Validators.required),
  alt:new FormControl('', Validators.required),
})

constructor(public serviciocrud:CrudService){

}
}
