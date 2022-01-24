

import { Pipe, PipeTransform } from "@angular/core";

@Pipe ({
  name: 'Vuela'
})

export class VuelaPipe implements PipeTransform {

  transform(valor:boolean ):string {

    if (valor === true){

    return 'Vuela';
    } else {
    return 'No vuela';
    }

  }
}
