import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import {MatCardModule} from '@angular/material/card';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PaginaInicioComponent } from './components/pagina-inicio/pagina-inicio.component';
import { PostListComponent } from './components/post-list/post-list.component';
import { PostDetailComponent } from './components/post-detail/post-detail.component';
import { PostAddComponent } from './components/post-add/post-add.component';
import { PostDeleteComponent } from './components/post-delete/post-delete.component';
import { PostEditComponent } from './components/post-edit/post-edit.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { fromEventPattern } from 'rxjs';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule} from '@angular/material/icon';
import { IconComponent } from './components/icon/icon.component';
import { HeaderComponent } from 'src/app/components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { RouterModule } from '@angular/router';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';

@NgModule({
  declarations: [
    AppComponent,
    PostListComponent,
    PostDetailComponent,
    PostAddComponent,
    PostDeleteComponent,
    PostEditComponent,
    PaginaInicioComponent,
    IconComponent,
    HeaderComponent,
    FooterComponent,
  ],
  imports: [
    FlexLayoutModule,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    MatCardModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
     MatToolbarModule,
     MatButtonModule,
     MatTableModule,
     MatIconModule,
     MatPaginatorModule,
     RouterModule.forRoot([
      { path: 'añadir', component: PostAddComponent },
      { path: 'borrar', component: PostDeleteComponent },
      { path: 'detalles/:id', component: PostDetailComponent },
      { path: 'lista', component: PostListComponent },
      { path: 'inicio', component: PaginaInicioComponent },

     ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
