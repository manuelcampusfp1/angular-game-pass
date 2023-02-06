import { Component } from '@angular/core';
import { Usuario } from 'src/app/modelos/usuario';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent {
  public user:Usuario;

  constructor(){
    this.user = new Usuario("luis","molina","luismolina@gmail.com");
  }
}
