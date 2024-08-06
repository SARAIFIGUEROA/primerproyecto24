import { Component, numberAttribute } from '@angular/core';
import { Producto } from 'src/app/models/producto';
import { CrudService } from '../../services/crud.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TENANT_ID } from '@angular/fire/compat/auth';
import { throwToolbarMixedModesError } from '@angular/material/toolbar';

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
  ngOnInit(): void {/* 
    this.serviciocrud.obternerProducto().subscribe(producto => {
      this.coleccionproductos= producto ;
    })*/
  }

  async AgregarProducto() {
    if (this.producto.valid) {
      let nuevoproducto: Producto = {
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
            text: "Se pudo registrar con exito!",
            icon: "success"});
          })
      
        .catch(error => {
          Swal.fire({
            title: "Error",
            text: "Hubo un error al registrar el usuario! \n" + error,
            icon: "error"
         });
        });
      }
    }
  }