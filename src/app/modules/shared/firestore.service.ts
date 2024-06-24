import { Injectable } from '@angular/core';
//importamos bd de cloud fire store y accedemos a las colecciones
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Usuario } from 'src/app/models/usuario';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {
  /*definimos de forma privada la coleccion de usuarios para que no sea accesible en toda la aplicacion, lo definimos como una coleccion de firestore que respete la estructura de nuestra insterfaz 'Usuario' */
  private usuariosCollection: AngularFirestoreCollection<Usuario>
  constructor(private database: AngularFirestore) {

    /*usuarioscollection va a definir la nueva coleccion usuarios que estara en nuestra base de datos */
    this.usuariosCollection = this.database.collection<Usuario>('usuarios');
  }

  agregarusuario(usuario: Usuario, id: string) {
    return new Promise(async (resolve, reject) => {
      try {
        usuario.uid = id;
        const resultado = await this.usuariosCollection.doc(id).set(usuario);
        resolve(resultado);
      }
      catch (error) {
        reject(error)
      }
    })
  }
}
