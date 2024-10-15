import { CanActivateFn } from '@angular/router';
//para poder hacer uso de los servecios
import { inject, Inject } from '@angular/core';
import { AuthService } from '../modules/autentificacion/services/auth.service';
import { Router } from '@angular/router';
//operadores observables
import {map, switchMap, of, from} from 'rxjs';

export const rutaProtegidaGuard: CanActivateFn = (route, state) => {
  //instamciamos servicio de autentificacion en el guardian
const servicioAuth = inject (AuthService);
//instanciamos rutas de forma local
const servicioRutas = inject (Router);
//especificamos cual es el rol que va a esperar el guardian activarse
const rolEsperado = "admin";

  return true;

};
