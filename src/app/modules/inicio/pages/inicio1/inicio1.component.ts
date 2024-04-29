import { Component } from '@angular/core';
import { Buzo } from 'src/app/models/buzo';

@Component({
  selector: 'app-inicio1',
  templateUrl: './inicio1.component.html',
  styleUrls: ['./inicio1.component.css']
})
export class Inicio1Component {
  //propiedad publica tipo array
  public info: Buzo[];
  constructor() {
    this.info = [
      {
        id: "",
        nombre: "buzo",
        tipo: "oversize",
        valor: 100,
        imagen: "https://falabella.scene7.com/is/image/FalabellaCO/126277319_1?wid=800&hei=800&qlt=70",
        alt: "imagen",
      },
      {
        id: "",
        nombre: "remera",
        tipo: "boxy",
        valor: 100,
        imagen: "https://acdn.mitiendanube.com/stores/943/997/products/remera-boy-over-negro1-04af4944190e9e96e716849377920935-640-0.jpg",
        alt: "imagen",
      }


    ];
  }
}
