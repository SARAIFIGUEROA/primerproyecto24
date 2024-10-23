import { CanActivateFn } from '@angular/router';
//para poder hacer uso de los servecios
import { inject } from '@angular/core';
import { AuthService } from '../modules/autentificacion/services/auth.service';
import { Router } from '@angular/router';
//operadores observables
import { map, switchMap, of, from } from 'rxjs';

export const rutaProtegidaGuard: CanActivateFn = (route, state) => {
  //instamciamos servicio de autentificacion en el guardian
  const servicioAuth = inject(AuthService);
  //instanciamos rutas de forma local
  const servicioRutas = inject(Router);
  //especificamos cual es el rol que va a esperar el guardian activarse
  const rolEsperado = "admin";
  //from -> convierte una promesa en observable
  return from(servicioAuth.tomaruid()).pipe(
    switchMap(uid => {
      if (uid) {
        return servicioAuth.obtenerRol(uid).pipe(
          map(rol => {
            if (rol === rolEsperado) {
              console.log("usuario verificado como administrador.")
              return true;
            } else {
              return false;
            }
          })
        )
      } else {
        console.log("usuaro no validado");
        //redireccionamos a la ruta de inicio para que el usuario se autentifique
        //usuario que nunca se registraron o que son visitantes
        return of(servicioRutas.createUrlTree(['/inicio']));
      }
    })
  )                        
};
