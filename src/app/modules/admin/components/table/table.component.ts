import { Component} from '@angular/core';
import { Producto } from 'src/app/models/producto';
import { CrudService } from '../../services/crud.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

//sweet
import Swal from 'sweetalert2';


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {
  //creamos colecvcion local de productos  -> la definimos como array
  coleccionproductos: Producto[] = [];
  /*atributos alfanumericos (string) se inicializa con comilla simple
  atributos numericos (number) se iniucializan con 0 ('0')*/

  productoSeleccionado!: Producto; // ! <- tomar valores vacios

  modalvisibleproductos: boolean = false;

  //definimos formuklarios para los productos 
  producto = new FormGroup({
    nombre: new FormControl('', Validators.required),
    precio: new FormControl(0, Validators.required),
    descripcion: new FormControl('', Validators.required),
    categoria: new FormControl('', Validators.required),
    imagen: new FormControl('', Validators.required),
    alt: new FormControl('', Validators.required),
  })

  constructor(public serviciocrud: CrudService) { }

  ngOnInit(): void { 
    this.serviciocrud.obtenerProducto().subscribe(producto => {
      this.coleccionproductos = producto;
    })
  }

  async AgregarProducto() {
    if (this.producto.valid) {
      let nuevoproducto: Producto = {
        //comilla simple vacia por que el id se lo asigna la bd
        idproducto: '',
        nombre: this.producto.value.nombre!,
        precio: this.producto.value.precio!,
        descripcion: this.producto.value.descripcion!,
        categoria: this.producto.value.categoria!,
        imagen: this.producto.value.imagen!,
        alt: this.producto.value.alt!,
      }

      await this.serviciocrud.crearproducto(nuevoproducto)
        .then(producto => {
          Swal.fire({
            title: "Felicidades!",
            text: "Se pudo subir con exito!",
            icon: "success"
          });
          //resetes el formulario y las casillas qeudan vacias
          this.producto.reset();
        })

        .catch(error => {
          Swal.fire({
            title: "Error",
            text: "Hubo un error al subir producto!  \n" + error,
            icon: "error"
          });
          this.producto.reset();
        });
    }
  }

//vinculamos con el modal

  MostrarBorrar(productoSeleccionado: Producto) {
    this.modalvisibleproductos = true;
    this.productoSeleccionado = productoSeleccionado;
  }

  
  borrarProducto(){
    this.serviciocrud.eliminarProducto(this.productoSeleccionado.idproducto)
    .then(respuesta => {
      alert("Se ha podido eliminar con éxito.");
    })
    .catch(error => {
      alert("Ha ocurrido un error al eliminar un producto: \n"+error);
    })
    
  }

  //editar productos
//va a recibir un producto seleccionado por el usuario, va a llamar al formularioi de producto y va a tomar uno por uno los atributos del formulario
Mostrareditar(productoSeleccionado:Producto){
this.productoSeleccionado = productoSeleccionado;

//todos los vlaores del producto seleccionado los va a autocompletar en el formulario del modal (menos el ID)

this.producto.setValue({
  nombre: productoSeleccionado.nombre,
precio: productoSeleccionado.precio,
descripcion:productoSeleccionado.descripcion,
categoria:productoSeleccionado.categoria,
imagen:productoSeleccionado.imagen,
alt:productoSeleccionado.alt,
})
}

//funcion editar producto
//se vincula al boton editarProducto del modal editar
EditarProducto(){
  //recibbimos informacion nueva que el usuario ingrese y lo enciamos a la base de datos
let datos: Producto ={
  //solo Idproducto no se modirfica por el usuario
  idproducto:this.productoSeleccionado.idproducto,
  //los demas artributos recibiram nueva informacion desde el formulario
nombre: this.producto.value.nombre!,
precio:this.producto.value.precio!,
descripcion:this.producto.value.descripcion!,
categoria:this.producto.value.categoria!,
imagen:this.producto.value.imagen!,
alt:this.producto.value.alt!,

}
//accedemos al servivio crud
this.serviciocrud.editarProducto(this.productoSeleccionado.idproducto, datos)
.then(producto=> {
  alert("el producto se ha modificado con exito")
  this.producto.reset();
})
 
.catch(error=>{
alert("hubo un problema al modificar un nuevo producto \n"+error)
});
this.producto.reset();
}
}