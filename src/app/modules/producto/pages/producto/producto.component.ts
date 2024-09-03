import { Component } from '@angular/core';
import { Producto } from 'src/app/models/producto';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent {
  //STRING QUE MODIFICARA E VALOR DEL INPUT en el componente hijo
  product: string = '';
  //creamos colecccion para recibir productos que se vayan agregando mediante ouput
  productocarrusel: Producto[] = [];

  productoanadido(producto: Producto) {
    this.product = `${producto.nombre} :  $${producto.precio}`;

    try {
      //Agregamos informacion recibida por el parametro de la funcion a la coleccion de carrusel

      this.productocarrusel.push(producto);
      Swal.fire({
        title: '¡Felicidades!',
        text: 'Se ha agregado el producto con exito!',
        icon: 'info'
      })
    }
    catch (error) {
      Swal.fire({
        title: '¡Oh no!',
        text: '  Hubo un error al agregar el producto!\n' + error,
        icon: 'error'
      })
    }
  }
}