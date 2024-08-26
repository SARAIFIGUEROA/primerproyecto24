import { Component } from '@angular/core';
import { Producto } from 'src/app/models/producto';
import { CrudService } from 'src/app/modules/admin/services/crud.service';

@Component({
  selector: 'app-card-buzos',
  templateUrl: './card-buzos.component.html',
  styleUrls: ['./card-buzos.component.css']
})
export class CardBuzosComponent {

  coleccionProductos: Producto[] = [];
  //variable 
  coleccionBuzos: Producto[] = [];
  //variable para seleccionar productos especificos
  productoselecCionado!: Producto
  //variable para manejar estado del modal
  modalVisible: boolean = false;


  //
  constructor(public servicioCrud: CrudService) { }
  //inicializa el momento que renderiza el componente
  ngOninit(): void {
    //accedemos al metodo "obteerproducto" y nos suscribimos a los cambios
    this.servicioCrud.obtenerProducto().subscribe(producto => {
      this.coleccionProductos = producto;

      //Mostrara la coleccion de eda categoria hasta el momento
      this.mostrarProductoBuzos();
    })
  }

  //funcion para filtrar los productos de tipo "buzos"
  mostrarProductoBuzos() {
    //Iteramos la coleccion de productos con un forEach
    this.coleccionProductos.forEach(producto => {
      //si es de tipo "buzos" => condicional
      if (producto.categoria === "Buzo") {
        //lo sube / guarda en la coleccion de producto de tipo "Buzo"
        this.coleccionBuzos.push(producto)
      }
    })
  }
 
  //funcion mostrarVer se activa con el boton que recibe el parametro de producto si no es de ese tipo no deberia mostrarlo
  //la informacion que recibnimos siempre va a ser de tipo producto
  mostrarVer(info: Producto){
    this.modalVisible = true;

    this.productoselecCionado = info;
  }

}
