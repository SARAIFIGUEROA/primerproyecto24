import { Producto } from "./producto";

export interface Pedido {
    idpedido:string;
    producto:Producto;
    cantidad:number;
    total:number;
}
