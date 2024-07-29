import { Component } from '@angular/core';
import { Usuario } from 'src/app/models/usuario';
//importaciones 
import { AuthService } from '../../services/auth.service';
import { FirestoreService } from 'src/app/modules/shared/firestore.service';
import { Router } from '@angular/router';

//crypto
import * as CryptoJS from 'crypto-js';
//iimportamos sweet alert
import Swal from 'sweetalert2';

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
        Swal.fire({
          title: "Hubo un error!",
          text: "No se pudo iniciar sesion!",
          icon: "error"
        });
        this.limpiarInputs();
        return;
      }
      const usuarioDoc = usuariobd.docs[0];
      //extrae los datos del documentoen forma de objetoy se especifica que va a ser del tipo "usuaro" (se refiere a la interfaz Usuario)
      const usuariodata = usuarioDoc.data() as Usuario

      //encripta la contraseña que el usuario envia meidante "iniciar sesion"
      const hashedPassword = CryptoJS.SHA256(credenciales.password).toString();

      //condicional que compara la contrasewña que acabamos de encriptar conn la que recibimos de "usuariodata"
      if (hashedPassword !== usuariodata.password) {
        Swal.fire({
          title: "Bien!",
          text: "Se inicio con exito",
          icon: "success"
        });
        this.Insesion.password = '';
        return;
      }

      const res = await this.servicioAuth.iniciarsesion(credenciales.email, credenciales.password)
        .then(res => {
          Swal.fire({
            title: "Bien!",
            text: "Se inicio sesion con exito!",
            icon: "success"
          });
          this.servicioRutas.navigate(['./inicio']);
        })
        .catch(err => {
          Swal.fire({
            title: "Error!",
            text: "No se pudo iniciar sesion",
            icon: "error"
          });
          this.limpiarInputs();
        })
    }
    catch (error) {
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