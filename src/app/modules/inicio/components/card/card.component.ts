import { Component } from '@angular/core';
//importamos interfaz
import { Buzo } from 'src/app/models/buzo';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
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
      },
    {
        id: "",
        nombre: "pantalon",
        tipo: "babucha",
        valor: 30000,
        imagen: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fcardon.com.ar%2Fshop%2Fhombre%2Fpantalon-cargo-marcos-negro%2F&psig=AOvVaw0zdilSkxDPAqCelpc7sq-M&ust=1719919674210000&source=images&cd=vfe&opi=89978449&ved=0CA8QjRxqFwoTCOCQ5qPehYcDFQAAAAAdAAAAABAE",
        alt: "imagen",
      }


    ];
  }
}
