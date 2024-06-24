import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Injectable({
  providedIn: 'root'

})
export class AuthService {
  constructor(public auth: AngularFireAuth) { }
  //funcion para registro
  registro(email: string, password: string) {
    return this.auth.createUserWithEmailAndPassword(email, password);
  }
  //funcion para inicio de sesion
  iniciarsesion(email: string, password: string) {
    return this.auth.signInWithEmailAndPassword(email, password);
  }
  //funcion para cerrar sesion 
  cerrarsesion() {
    //devueklve una promesa vacia
    return this.auth.signOut();
  }
  // funcion para tomar el uid
  async tomaruid() {
    //nos va a generar una promesa y la constante la va a capturar
    const user = await this.auth.currentUser
    //si el usuario no respeta la estructura de la inhtrerfaz
    //si tuvo problemas para el registro -> ejm: Mal internet
    if (user == null) {
      return null
    } else {
      return user.uid;
    }
  }
}
