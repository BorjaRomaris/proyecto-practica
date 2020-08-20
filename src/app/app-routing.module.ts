import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostAddComponent } from './components/post-add/post-add.component';
import { PostListComponent } from './components/post-list/post-list.component';
import { PostDetailComponent } from './components/post-detail/post-detail.component';
import { PostDeleteComponent } from './components/post-delete/post-delete.component';
import { PaginaInicioComponent } from './components/pagina-inicio/pagina-inicio.component';


const routes: Routes = [
{ path: 'añadir', component: PostAddComponent },
{ path: 'borrar', component: PostDeleteComponent },
{ path: 'detalles', component: PostDetailComponent },
{ path: 'lista', component: PostListComponent },
{ path: 'inicio', component: PaginaInicioComponent },




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
