import { importProvidersFrom, Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Pedido } from 'src/app/models/pedido';
import { AuthService } from '../../autentificacion/services/auth.service';
import { Router } from '@angular/router';
import { map } from 'rxjs';
import { Producto } from 'src/app/models/producto';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class CarritoService {
  pedido: Pedido = {
    idpedido: '',
    producto: {
      idproducto: '',
      nombre: '',
      precio: 0,
      descripcion: '',
      categoria: '',
      imagen: '',
      alt: '',
      stock: 0,
    },
    cantidad: 0,
    total: 0,
  }
  //coleccion que va a seguir el modelo de pedido
  private pedidoscoleccion: AngularFirestoreCollection<Pedido>
  private uid: string | null = null;
  constructor(
    private servicioauth: AuthService,
    private serviciofirestore: AngularFirestore,
    public servicioruta: Router,
  ) {
    this.pedidoscoleccion = this.serviciofirestore.collection(`usuarios/${this.uid}/pedido`)
  }

  iniciarcarrito() {
    this.servicioauth.tomaruid().then(uid => {
      this.uid = uid
      if (this.uid === null) {
        console.log("no se obtuvo el uid, intente iniciar sesion");
        this.servicioruta.navigate(['/inicio-sesion']);
      } else {
        this.pedidoscoleccion = this.serviciofirestore.collection(`usuarios/${this.uid}/pedido`)
      }
    })
  }
  obtenercarrito() {
    return this.pedidoscoleccion.snapshotChanges().pipe(map(action =>
      action.map(a => a.payload.doc.data())
    ))
  }
  crearpedido(producto: Producto, stocK: number) {
    try {
      const idpedido = this.serviciofirestore.createId();
      this.pedido.idpedido = idpedido;
      this.pedido.producto = producto;
      this.pedido.cantidad = stocK;
      //multiplicaos por stock que mandamos
      this.pedido.total = producto.precio * stocK;

      this.pedidoscoleccion.doc(idpedido).set(this.pedido);
    } catch (error) {
      Swal.fire({
        title: 'Error',
        text: 'ha ocurrido un error al subir su producto \n' + error,
        icon: 'error',
      })
    }
  }

  borrarproducto(pedido: Pedido) {
    try {
      this.pedidoscoleccion.doc(pedido.idpedido).delete();

      Swal.fire({
        title: `${pedido.producto.nombre} ha sido borrado`,
        text: 'ha borrado el producto con exito',
        icon: 'info',
      })
    } catch (error) {
      Swal.fire({
        title: '¡Oh NO!',
        text: 'no se ha borrado el producto',
        icon: 'error',
      })
    }
  }
}

