import { Injectable } from '@angular/core';
import { Producto } from 'src/app/models/producto';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { map } from 'rxjs';
import { getDownloadURL, getStorage, ref, UploadResult, uploadString, deleteObject } from 'firebase/storage';
//funcionalidades de storage, importaciones para el manejo de archivos y referencias.
//getDownloadURL es para tener la url de descarga de la imagen subida
//getStorage es para obtener la instancia de almacenamiento
//ref -> para crear referencias
//Uploadresult -> Tipo que representa el resultado de una operacion subida
//uploadString -> para subir imagenes en formato de cadena
//deleteObjet -> para eliminar un espacio en el almacenamiento



@Injectable({
  providedIn: 'root'
})
export class CrudService {
  //definimos una coleccion para los productos de la web
  private productosCollection: AngularFirestoreCollection<Producto>

  //definimos variable respuesta que podra subir resultados
  private respuesta!: UploadResult;

  //inicializar servicio de storage

  private storage = getStorage();



  constructor(private database: AngularFirestore) {
    this.productosCollection = database.collection('producto');
  }
  // crear,
  crearproducto(producto: Producto, url: string) {
    return new Promise(async (resolve, reject) => {
      try {
        //creamos numero identificativo para el producto en la base de datos
        const idproducto = this.database.createId();
        //asignamos id creado al atributo idproducto de la interfaz Producto
        producto.idproducto = idproducto;
        //asignamos la url recibida
        producto.imagen = url;

        //accede a la collecion productos
        const resultado = await this.productosCollection.doc(idproducto).set(producto);

        resolve(resultado);
      } catch (error) {
        reject(error);
      }
    })
  }


  //funcion obtener 
  //accedemos a la collecion productos
  /*snapchanges toma captura del estado de los datos
  pipe => tuberias que retornan un nuevo arreglo
  map  "mapas" o recorre esa nueva informacion es un observador, lee, no hacve modificaciones por si solo a menos que se lo pidamos
  a  resguarda la nueva informacion y la envia como un documento */
  obtenerProducto() {
    return this.productosCollection.snapshotChanges().pipe(map(action => action.map(a => a.payload.doc.data())))
  }


  //editar //id para saber cual es el producto que quiero eliminar
  editarProducto(idproducto: string, nuevaData: Producto) {
    return this.database.collection('producto').doc(idproducto).update(nuevaData);
  }


  // y eliminar producto
  //id para saber cual es el producto que quiero eliminar
  eliminarProducto(idproducto: string, imagenUrl: string) {
    return new Promise((resolve, reject) => {
      //encapsula todo lo que hace la promesa
      try {
        const storage = getStorage();
        const referenciadeimg = ref(storage, imagenUrl);
        deleteObject(referenciadeimg)

          .then((res) => {
            const respuesta = this.productosCollection.doc(idproducto).delete();
            //deja la respuesta como resuelta
            resolve(respuesta);
          })

          .catch(error => {
            reject("Error al elkiminar la imagen: \n" + error);
          })
      }
      catch (error) {
        reject(error);
      }
    })
  }


  //funcion para obrtener la url de imagens
  obtenerurlimg(respuesta: UploadResult) {
    //retorna url obtenida como un a referencia
    return getDownloadURL(respuesta.ref)
  }
  /**
   * @param {string} nombre <- nombre de la imagen
   * @param {any} imagen  <- tipo de imagenes  que se pueden subir
   * @param {string} ruta  <-ruta de almacenamiento de laas imagenes
   * @returns <- se retorna lo obtenido
   */

  //subir imagenes con sus referencias
  async subirImagen(
    nombre: string,
    imagen: any,
    ruta: string,) {
    try {
      //accede a Storage (almacenamiento), ruta (crapeta) / nom re (nombre de la imagen)
      let referenciadeimg = ref(this.storage, ruta + '/' + nombre);
      //asignamos a la respuesta la informacion de las oimagenes subidas
      this.respuesta = await uploadString(referenciadeimg, imagen, 'data_url')
        .then(resp => {
          return resp;
        })
      return this.respuesta;

    } catch (error) {
      console.log(error)
      return this.respuesta;
    }
  }
}

