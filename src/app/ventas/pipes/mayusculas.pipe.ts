import { Pipe, PipeTransform } from "@angular/core";

@Pipe ({
  name: 'Mayusculas'
})

export class MayusculasPipe implements PipeTransform {

  transform(valor:string, enMayusculas:boolean):string {

    //if (enMayusculas === true){

     // return valor.toUpperCase();
    //} else {
    //  return valor.toLowerCase();
    //}

    return (enMayusculas) ? valor.toUpperCase( ) : valor.toLowerCase();
  }
}
