import { Component } from '@angular/core';
import { Usuario } from 'src/app/models/usuario';


@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent {
  //input de contraseña
  hide = true;
  //registro- importamos interfaz de usuario  => inicializamos
  usuarios: Usuario={
    uid:'',
    nombre:'',
    apellido:'',
    email: '',
    rol:'',
    password:'',
  }
  //Un arreglo de tipo usuario, significa que solo puede resibir valores que esten declarados en la intrerfaz usuario y de tipo array
  coleccionUsuarios: Usuario[]=[]

//funcion para el regustro de nyevos usuarios
registrar(){
//constsnte credenciales va a resguardar la informacion que ingrese el usuario
const credenciales ={
  uid:this.usuarios.uid,
  nombre:this.usuarios.nombre,
  apellido:this.usuarios.apellido,
  Email:this.usuarios.email,
  rol:this.usuarios.rol,
  password:this.usuarios.password,
}

//enviamos la informacion como uvo objeto a la coleccion

this.coleccionUsuarios.push(credenciales)
//mostramos credenciales por consola
console.log(credenciales);
console.log(this.coleccionUsuarios);
}
}


