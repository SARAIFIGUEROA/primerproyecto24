import { Injectable } from '@angular/core';
//importamos interfaz
import { Producto } from 'src/app/models/producto';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { AST } from '@angular/compiler';

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
}

//obtener 



//editar
// y eliminar producto