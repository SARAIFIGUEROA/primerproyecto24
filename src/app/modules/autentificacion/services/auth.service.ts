import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
//observables para obtener cambios
import { Observable } from 'rxjs';
//itera coleccion leyendo la info actual
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
//
  private rolUsuario:string | null = null;

  //referenciamos uuth de firebase en el servicio y serviciofirestore
  constructor(
   private auth: AngularFireAuth,
   private serviciofirestore: AngularFirestore) { }

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
//retornamos del servicio firestore la cllecccion de usuarios, buscamos una refereencia en los email reguistrados y los comprarmaos con los ingrese el usuario al iniciar sesion y los obtiene con el .get, lo vuelve una promesa => da un resultado resuelto o rechazado
  obtenerusuario(email: string) {
    return this.serviciofirestore.collection('usuarios', ref => ref.where('email', '==', email)).get().toPromise();
  }
//funcion para obtener el rol de usuario
obtenerRol(uid: string): Observable<string | null>{
//accedemos a la coleccion nusuarios, buscado por uid, obteniendo cambios en valores, al enviar info, por tuberia (ppipe), mapeamos la coleccion, obtenemos usuario especifico y buscamos su atributo "rol", aun si es Nulo
return this.serviciofirestore.collection("usuarios").doc(uid).valueChanges()
.pipe(map((usuario: any)=> usuario ? usuario.rol: null));
}
//enviamos elrol obtenido
setusuarioRol(rol:string){
this.rolUsuario = rol;
}
//obtener el rol y asignarlo al rol de la variable local
getusuarioRol(): string | null{
return this.rolUsuario;
}
}
