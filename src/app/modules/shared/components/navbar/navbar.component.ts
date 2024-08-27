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

  //funcion para cambiar el cvolor de fondo para modo oscuro
  cambiarFondo() {
    //la variable toggle llama a un htmlinputelement que devuelve el valor del input a formato hmtl parapoder cambiarlo, tomamos el id y volvemos a usar el htmlinput para que nos devulva en html
    let toggle: HTMLInputElement | null = document.getElementById('toggle') as HTMLInputElement
    let label_toggle: HTMLElement | null = document.getElementById('label_toggle') as HTMLElement

    if (toggle) {
      let checked: boolean = toggle.checked;
      document.body.classList.toggle('dark', checked)

      if (checked) {
        /*el inner nos devuelve un valor*/
        //sol
        label_toggle!.innerHTML = '<i class="fa-solid fa-sun"></i>';
      } else {
        //luna
        label_toggle!.innerHTML = '<i class="fa-solid fa-moon"></i>'
      }
    }
  }
}
