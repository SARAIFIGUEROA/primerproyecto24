import { Component } from '@angular/core';
import { Usuario } from 'src/app/models/usuario';
//importaciones 
import { AuthService } from '../../services/auth.service';
import { FirestoreService } from 'src/app/modules/shared/firestore.service';
import { Router } from '@angular/router';

//crypto
import * as CryptoJS from 'crypto-js';

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
      email: this.Insesion.email,
      password: this.Insesion.password,
    }

    try {
      //obtenemos usuario de la bD
      const usuariobd = await this.servicioAuth.obtenerusuario(credenciales.email)

      if (!usuariobd || usuariobd.empty) {
        alert("Correo electronico no registrado");
        this.limpiarInputs();
        return;
      }
      const usuarioDoc = usuariobd.docs[0];
      const usuariodata=usuarioDoc.data() as Usuario
      const hashedPassword = CryptoJS.SHA256(credenciales.password).toString();


      if (hashedPassword !== usuariodata.password){
        alert("contraseña incorrecta");
        this.Insesion.password='';
        return;
      }
    
  const res = await this.servicioAuth.iniciarsesion(credenciales.email, credenciales.password)
    .then(res => {
      alert('se pudo ingresar con exito!')
      this.servicioRutas.navigate(['./inicio']);
    })
    .catch(err => {
      alert('Hubo un problema al iniciar sesion' + err);
      this.limpiarInputs();
    })}
    catch(error){
      this.limpiarInputs();
    }
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
  /*en constante input llamamos atributos y los inicializamos
  const inputs = {
    uid: this.Insesion.uid = '',
    nombre: this.Insesion.nombre = '',
    apellido: this.Insesion.apellido = '',
    email: this.Insesion.email = '',
    rol: this.Insesion.rol = '',
    password: this.Insesion.password = '',
  }
}*/
  limpiarInputs() {
    const inputs = {
      email: this.Insesion.email = '',
      password: this.Insesion.password = ''
    }
  }
}