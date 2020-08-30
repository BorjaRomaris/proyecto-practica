import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { fromEventPattern } from 'rxjs';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule} from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { IconComponent } from './components/icon/icon.component';
import { PostDetailComponent } from './components/post-detail/post-detail.component';
import { PostDeleteComponent } from './components/post-delete/post-delete.component';
import { PostEditComponent } from './components/post-edit/post-edit.component';
import { MatCardModule } from '@angular/material/card';
import { LoginComponent } from './components/login/login.component';
import { RegistroComponent } from 'src/app/components/registro/registro.component';
import { PostListComponent } from './components/post-list/post-list.component';
import { DatosPerfilComponent } from './components/datos-perfil/datos-perfil.component';
import { PerfilEditarComponent } from './components/perfil-editar/perfil-editar.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import {  MatInputModule } from '@angular/material/input';
@NgModule({
  imports: [
    FlexLayoutModule,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    MatCardModule,
    BrowserAnimationsModule,
    FormsModule,
     MatToolbarModule,
     MatButtonModule,
     MatTableModule,
     MatIconModule,
     MatPaginatorModule,
     MatCardModule,
    RouterModule,
    MatCardModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,

  ],
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    IconComponent,
    LoginComponent,
    PostDetailComponent,
    PostEditComponent,
    PostDeleteComponent,
    RegistroComponent,
    PostListComponent,
    DatosPerfilComponent,
    PerfilEditarComponent

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule{ }
