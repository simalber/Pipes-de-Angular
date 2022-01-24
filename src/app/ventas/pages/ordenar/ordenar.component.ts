import { Component, OnInit } from '@angular/core';
import { color, heroe } from '../../interfaces/ventas.interfaces';

@Component({
  selector: 'app-ordenar',
  templateUrl: './ordenar.component.html',
  styles: [
  ]
})
export class OrdenarComponent {

  ordenarPor: string = '';

  heroes: heroe [ ] = [
  { nombre: 'Superman',
  vuela : true,
  color: 0,
  },
  {
    nombre: 'Aquaman',
    vuela: false,
    color: 2,
  },
  {
    nombre: 'Venom',
    vuela: false,
    color: 1,
  },
  {
    nombre: 'Linterna verde',
    vuela: true,
    color: 3,
  },
  {
    nombre: 'Hulk',
    vuela: false,
    color: 3,
  }]

  enMayusculas: boolean = true;


  cambiar(){
    this.enMayusculas = !this.enMayusculas;
  }

  cambiarOrder (valor:string){
    this.ordenarPor = valor;
  }
}
