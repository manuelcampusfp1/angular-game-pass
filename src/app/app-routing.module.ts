import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './paginas/home/home.component';
import{ContactComponent} from './paginas/contact/contact.component';
import { UsuariosComponent} from './paginas/usuarios/usuarios.component';

const routes: Routes = [
  {path: "", component: HomeComponent},
  {path: "contacto", component: ContactComponent},
  {path: "usuarios", component: UsuariosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
