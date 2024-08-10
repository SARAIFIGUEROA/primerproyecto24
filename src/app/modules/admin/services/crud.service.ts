import { Injectable } from '@angular/core';
import { Producto } from 'src/app/models/producto';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CrudService {
  //definimos una coleccion para los productos de la web
private productosCollection: AngularFirestoreCollection<Producto>

  constructor(private database:AngularFirestore) { 
    this.productosCollection=database.collection('producto');
  }

// crear,
crearproducto(producto:Producto){
return new Promise(async(resolve, reject)=> {
  try{
    //creamos numero identificativo para el producto en la base de datos
    const idproducto=this.database.createId();
//asignamos id creado al atributo idproducto de la interfaz Producto
    producto.idproducto= idproducto;
    //accede a la collecion productos
    const resultado=await this.productosCollection.doc(idproducto).set(producto);

    resolve(resultado);
    }catch(error){
      reject(error);
    }
})
}
//funcion obtener 
//accedemos a la collecion productos
/*snapchanges toma captura del estado de los datos
pipe tuberias que retornan un nuevo arreglo
map  "mapas" o recorre esa nueva informacion es un observador, lee, no hacve modificaciones por si solo a menos que se lo pidamos
a  resguarda la nueva informacion y la envia como un documento */
obternerProducto(){
  return this.productosCollection.snapshotChanges().pipe(map(action => action.map(a => a.payload.doc.data())))
 }
//editar
// y eliminar producto
}