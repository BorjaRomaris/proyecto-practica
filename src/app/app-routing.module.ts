import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostListComponent } from './components/post-list/post-list.component';
import { PostDetailComponent } from './components/post-detail/post-detail.component';
import { PostDeleteComponent } from './components/post-delete/post-delete.component';
import { LoginComponent } from './components/login/login.component';
import { AppComponent } from './app.component';
import { RegistroComponent } from 'src/app/components/registro/registro.component';
import { DatosPerfilComponent } from 'src/app/components/datos-perfil/datos-perfil.component';
import { PerfilEditarComponent } from 'src/app/components/perfil-editar/perfil-editar.component';

const routes: Routes = [
{ path: 'borrar', component: PostDeleteComponent },
{ path: 'detalles', component: PostDetailComponent },
{ path: '', component: PostListComponent },
{ path: 'login', component: LoginComponent },
{ path: 'registro', component: RegistroComponent },
{ path: 'lista', component: PostListComponent },
{ path: 'perfil', component: DatosPerfilComponent},
{ path: 'editar', component: PerfilEditarComponent },







];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
