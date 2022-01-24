import { Component } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent{
  nombrelower   : string = 'alberto';
  nombreupper   : string = 'ALBERTO';
  nombrecompleto: string= 'AlbERto';

  fecha: Date = new Date();


}
