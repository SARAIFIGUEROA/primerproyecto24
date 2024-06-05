import { Component } from '@angular/core';
import { Usuario } from 'src/app/models/usuario';

@Component({
  selector: 'app-iniciosesion',
  templateUrl: './iniciosesion.component.html',
  styleUrls: ['./iniciosesion.component.css']
})

export class IniciosesionComponent {
  hide = true;
  //mostrar contraseña
  //definimos coelccion local de usuario
  public colleccioniniciolocal: Usuario[];

  //local

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
  }

  //lo que se ingrese 
  Insesion: Usuario = {
    uid: '',
    nombre: '',
    apellido: '',
    email: '',
    rol: '',
    password: '',
  }

  iniciarsesion() {
    const credenciales = {
      uid: this.Insesion.uid,
      nombre: this.Insesion.nombre,
      apellido: this.Insesion.apellido,
      email: this.Insesion.email,
      rol: this.Insesion.rol,
      password: this.Insesion.password,
    }

    for (let i = 0; i < this.colleccioniniciolocal.length; i++) {
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
    }
    this.limpiarinputs();
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
}


