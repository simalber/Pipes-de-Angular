import { Pipe, PipeTransform } from '@angular/core';
import { heroe } from '../interfaces/ventas.interfaces';

@Pipe({
  name: 'ordenar'
})
export class OrdenarPipe implements PipeTransform {

  transform(heroes: heroe[], orderPor: string='Sin valor'): heroe[] {

    switch ( orderPor ){
      case 'nombre':
        return heroes = heroes.sort((a,b)=> (a.nombre > b.nombre) ? 1 : -1);

      case 'vuela':
        return heroes = heroes.sort((a,b)=> (a.vuela > b.vuela) ? -1 : 1);

      case 'color':
        return heroes = heroes.sort((a,b)=> (a.color > b.color) ? 1 : -1);

      default:
        return heroes;
    }
    //if (orderPor === 'Sin valor') {
      //return heroes;
    //}else{


    //return heroes;}
  }

}
