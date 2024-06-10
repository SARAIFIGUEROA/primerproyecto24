import { Component } from '@angular/core';
import { Usuario } from 'src/app/models/usuario';
//importamos servicio de autentificacion
import { AuthService } from '../../services/auth.service';
//importamos componentes de rutas de angular
import { Router } from '@angular/router';


@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent {
  //input de contraseña
  hide = true;
  //registro- importamos interfaz de usuario  => inicializamos
  usuarios: Usuario = {
    uid: '',
    nombre: '',
    apellido: '',
    email: '',
    rol: '',
    password: '',
  }
  //Un arreglo de tipo usuario, significa que solo puede resibir valores que esten declarados en la intrerfaz usuario y de tipo array
  coleccionUsuarios: Usuario[] = []
 
  constructor( public servicioAuth:AuthService,
    public servicioRutas: Router
  ){

  }
  //funcion para el registro de nuevos usuarios
   async registrar() {
    //constsnte credenciales va a resguardar la informacion que ingrese el usuario
   /* const credenciales = {
      uid: this.usuarios.uid,
      nombre: this.usuarios.nombre,
      apellido: this.usuarios.apellido,
      email: this.usuarios.email,
      rol: this.usuarios.rol,
      password: this.usuarios.password,
    }*/
      //registro con servicio
    const credenciales = {
      email:this.usuarios.email,
      password:this.usuarios.password
    }
    const respuesta = this.servicioAuth.registro(credenciales.email, credenciales.password)
//then es una promesa que devuelve el mismo valor 
    .then(respuesta=>[
      alert("Se pudo registrar con exito :)"),
      //el metodo navigate nos direcciona a otra vista
      this.servicioRutas.navigate(['/incio'])
    ])
    //encapsula un error. captura una falla y la vuelve error cuando la promesa salg mal
    .catch(error => {
      ("hubo un error al registrar un nuevo usuario : (\n"+error)
    });
  
    /*
    //enviamos la informacion como uvo objeto a la coleccion
    this.coleccionUsuarios.push(credenciales);
    //llamamos la funcion para ejecutarla*/
alert('se ha registadp con exito')
    
    /*this.limpiarinputs();
    //mostramos credenciales por consola
    console.log(credenciales);
    console.log(this.coleccionUsuarios);
  }*/

  //funcion para vaciar inputs
  limpiarinputs(); /*{
    //en constante input llamamos atributos y los inicializamos
    /*const input = {
      uid: this.usuarios.uid='',
      nombre: this.usuarios.nombre='',
      apellido: this.usuarios.apellido='',
      email: this.usuarios.email='',
      rol: this.usuarios.rol='',
      password: this.usuarios.password='',

    }*/
  //}
  }}