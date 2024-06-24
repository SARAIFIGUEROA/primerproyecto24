import { Component } from '@angular/core';
import { Usuario } from 'src/app/models/usuario';
//importaciones 
import { AuthService } from '../../services/auth.service';
import { FirestoreService } from 'src/app/modules/shared/firestore.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-iniciosesion',
  templateUrl: './iniciosesion.component.html',
  styleUrls: ['./iniciosesion.component.css']
})

export class IniciosesionComponent {
  hide = true;
  //mostrar contraseña
  //definimos coelccion local de usuario
  /* 
  public colleccioniniciolocal: Usuario[];

  //coleccion local

  constructor() {
    this.colleccioniniciolocal = [
      {
        uid: '',
        nombre: 'santiago',
        apellido: 'lopez',
        email: 'santi@gmail.com',
        rol: 'admin',
        password: '',
      },
      {
        uid: '',
        nombre: 'juan',
        apellido: 'ramirez',
        email: 'juanramirez@gmail.com',
        rol: 'admin',
        password: '',
      },
      {
        uid: '',
        nombre: 'agustiha',
        apellido: 'gomez',
        email: 'agusyciro7@gmail.com',
        rol: 'admin',
        password: '',
      }
    ]
  }*/
  constructor(
    public servicioAuth: AuthService,
    public servicioFirestore: FirestoreService,
    public servicioRutas: Router,) { }

  //lo que se ingrese 
  Insesion: Usuario = {
    uid: '',
    nombre: '',
    apellido: '',
    email: '',
    rol: '',
    password: '',
  }

  async iniciarsesion() {
    /* const credenciales = {
       uid: this.Insesion.uid,
       nombre: this.Insesion.nombre,
       apellido: this.Insesion.apellido,
       email: this.Insesion.email,
       rol: this.Insesion.rol,
       password: this.Insesion.password,*/
    const credenciales = {
      email: this.usuarios.email,
      password: this.usuarios.password,
    }
    const res = await this.servicioAuth.iniciarsesion(credenciales.email, credenciales.password)
      .then(res => {
        alert('se pudo ingresar con exito!')
        this.servicioRutas.navigate(['./inicio']);
      })
      .catch(err => {
        alert('Hubo un problema al iniciar sesion' + err);
        this.limpiarinputs();
      })
  }
  /* for (let i = 0; i < this.colleccioniniciolocal.length; i++) {
     const usuariolocal = this.colleccioniniciolocal[i];
     if (usuariolocal.nombre === credenciales.nombre && usuariolocal.apellido === credenciales.apellido && usuariolocal.email === credenciales.email &&
       usuariolocal.rol === credenciales.rol && usuariolocal.password === credenciales.password) {
       alert("¡ingresaste con exito! :)");
       break;
     }
     else {
       alert("l");
       break;
     }
   }*/

}

limpiarinputs() {
  //en constante input llamamos atributos y los inicializamos
  const inputs = {
    uid: this.Insesion.uid = '',
    nombre: this.Insesion.nombre = '',
    apellido: this.Insesion.apellido = '',
    email: this.Insesion.email = '',
    rol: this.Insesion.rol = '',
    password: this.Insesion.password = '',
  }
}



