import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { LocalStorageService } from 'src/app/services/local-storage.service';

@Component({
  selector: 'app-datos-perfil',
  templateUrl: './datos-perfil.component.html',
  styleUrls: ['./datos-perfil.component.scss']
})
export class DatosPerfilComponent implements OnInit {
  public user: User = {};
  public u = {};
  constructor(  private localStorage: LocalStorageService ) { }

  ngOnInit(): void {
    if (localStorage.getItem('--token-Users&Posts') != null) {
      this.u = JSON.parse(this.localStorage.getToken());
      this.user = this.u;
    }
  }

}
