import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styleUrls: [

  ]
})
export class NoComunesComponent {

  //i18nselect

  nombre: string = 'Alberto';
  genero: string = 'masculino';

  invitacionMapa = {
    'masculino' : 'invitarlo',
    'femenino' : 'invitarla',
  }

  //i18nplural

  clientes: string[] = ['Maria', 'Fernando', 'Alejandro', 'Miriam', 'Elena'];
  clientesMapa = {
    '=0' : 'no tenemos ningún cliente esperando',
    '=1' : 'tenemos un cliente esperando',
    'other' : 'tenemos # clientes esperando'

  }

  cambiarCliente () {
    this.nombre = 'Miriam',
    this.genero = 'femenino'

  };

  borrarCliente () {
    this.clientes.pop()

  };

  //keyValuePipe

  persona = {
    nombre: 'Alberto',
    edad: 24,
    direccion: 'Valencia, España'

  }

  heroes = [

    {
      nombre: 'Superman',
      vuela: true
    },
    {
      nombre: 'Robin',
      vuela: false
    },
    {
      nombre: 'Spiderman',
      vuela: false
    }
  ]
}
