import { Component } from '@angular/core';
import { Producto } from 'src/app/models/producto';
import { CrudService } from 'src/app/modules/admin/services/crud.service';
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



}
