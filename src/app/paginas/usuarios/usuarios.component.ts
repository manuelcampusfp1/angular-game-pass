import { Component } from '@angular/core';
import { Usuario } from 'src/app/modelos/usuario';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent {
  public user:Usuario;
  public listUsers:Usuario[];
  public ocultar:boolean;

  constructor(){
    this.user = new Usuario("luis","molina","luismolina@gmail.com");
    this.listUsers = [
      new Usuario("luis","molina","luismolina@gmail.com"),
      new Usuario("angel","molina","luismolina@gmail.com","1234"),
      new Usuario("ana","molina","luismolina@gmail.com"),
      new Usuario("laura","molina","luismolina@gmail.com")
    ]
    this.ocultar = true;
  }

  mostrarInfo() {
    this.ocultar = !this.ocultar;
  }

  cambiarInfo(nombre, apellido:HTMLInputElement, email) {
    //dos formas distintas de hacerlo nombre.value o en el front poner .value
    this.user = new Usuario(nombre.value, apellido.value, email);

    //se puede hacer una funcion para que el apellido cumpla ciertos criterios
    apellido.style.borderColor ="red";
  }

}
