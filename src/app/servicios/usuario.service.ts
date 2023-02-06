import { Injectable } from '@angular/core';
import { Usuario } from '../modelos/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  public user: Usuario;
  public listUsers :Usuario[];

  constructor(){
    this.user = new Usuario("luis","molina","luismolina@gmail.com");
    this.listUsers = [
      new Usuario("luis","molina","luismolina@gmail.com"),
      new Usuario("angel","molina","luismolina@gmail.com","1234"),
      new Usuario("ana","molina","luismolina@gmail.com"),
      new Usuario("laura","molina","luismolina@gmail.com")
    ]
  }
}

