import { Component } from '@angular/core';
import { AuthService } from 'src/app/modules/autentificacion/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  logueado = true;
  deslogueado = false;

  constructor(
    public servicioauth: AuthService,
    public servicioderutas: Router,
  ) { }
  ingresar() {
    this.logueado = false;
    this.deslogueado = true;
  }
  cerrarsesion() {
    this.logueado = false;
    this.deslogueado = true;

    this.servicioauth.cerrarsesion();
    this.servicioderutas.navigate(["./"]);

  }
}
