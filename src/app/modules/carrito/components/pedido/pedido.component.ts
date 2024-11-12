import { Component } from '@angular/core';
import { Pedido } from 'src/app/models/pedido';
import { CarritoService } from '../../services/carrito.service';
import { AuthService } from 'src/app/modules/autentificacion/services/auth.service';

@Component({
  selector: 'app-pedido',
  templateUrl: './pedido.component.html',
  styleUrls: ['./pedido.component.css']
})
export class PedidoComponent {
  Coleccionpedidos: Pedido[] = [];

  constructor(
    public serviciocarrito: CarritoService,
    public servicioauth: AuthService) { }

  ngOnInit() {
    this.servicioauth.tomaruid().then(uid => {
      if (uid) {
        this.servicioauth.obtenerRol(uid).subscribe(rol => {
          if (rol === 'usuario') {
            this.serviciocarrito.iniciarcarrito();
            this.serviciocarrito.obtenercarrito().subscribe(producto => this.Coleccionpedidos = producto);
          }
          else {
            console.error("no se obtuvo el usuario de manera correcta")
          }
        })
      }
    })
  }

  quitarpedido(pedido: Pedido) {
    this.serviciocarrito.borrarproducto(pedido);
  }

}

