import { Component } from '@angular/core';
import { Usuario } from 'src/app/modelos/usuario';
import { UsuarioService } from 'src/app/servicios/usuario.service';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent {
  public user:Usuario;
  public listUsers:Usuario[];
  public ocultar:boolean;
  public ocultar2:boolean;

  constructor(public usuarioService: UsuarioService){
    this.user = usuarioService.user;
    this.listUsers = usuarioService.listUsers;
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

  
  activarPasswd(password: HTMLInputElement){
    console.log("activar passwd")
    password.style.visibility="visible";
  }

}
