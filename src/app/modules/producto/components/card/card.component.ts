import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Producto } from 'src/app/models/producto';
import { CrudService } from 'src/app/modules/admin/services/crud.service';

//importaciones para com unicarnos con el compnente padre

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})

export class CardComponent {

coleccionProductos : Producto[] = [];
//variable local para seleccionar a un producto especifico
productoseleCcionado!: Producto;
//variable local para arreglar 
modalVisible: boolean = false;

//boolean para el ngif
compraVisibole: boolean = false

//directivas para comunicarse con el componente padre
//llamamos la variable "productoreciente"
@Input ()productoReciente:string = '';
//evenemitter nuevo evento de tipo producto, trae un producto, es un evento que registra 
@Output() productoagregado= new EventEmitter<Producto>();

constructor (public servicioCrud: CrudService){

}
ngOninit(): void{
  this.servicioCrud.obtenerProducto().subscribe(producto => {
    this.coleccionProductos = producto;
  })
}

//funcion mostrar mas informacion de los productos
mostrarVer(info: Producto){
  //cambaimos estado del modal a true (lo podemos ver, es visible)
  this.modalVisible= true;
  //guardamos en la variable productoseleCciondo la informacion del producto elegido
  this.productoseleCcionado=info;
}

//creamos la funcion agregar producto
//recibe informacion respetando la interfaz de producto
AgregarProducto(info:Producto){
  //llmamos a ouput y emitimos la nueva informacion del producto que agregamos
  this.productoagregado.emit(info);
//NG IF
  this.compraVisibole = true
}
}
