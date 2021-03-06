import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-perfil-editar',
  templateUrl: './perfil-editar.component.html',
  styleUrls: ['./perfil-editar.component.scss']
})
export class PerfilEditarComponent implements OnInit {


  formError: string;
  user: User = {};
  u: User = {};
  userForm = new FormGroup({
    first_name: new FormControl(''),
    last_name: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
    confirm_password: new FormControl(''),
    avatar: new FormControl('')
  });

  constructor(private userService: UserService, private localStorage: LocalStorageService, private route: Router,  ) { }

  ngOnInit(): void {
    this.u = JSON.parse(this.localStorage.getToken());
    this.userService.getUserById(`${this.u.id}`).subscribe(res => {
      this.userForm.controls.first_name.setValue(res.data.first_name);
      this.userForm.controls.last_name.setValue(res.data.last_name);
      this.userForm.controls.email.setValue(res.data.email);
      this.userForm.controls.password.setValue(res.data.password);
      this.userForm.controls.confirm_password.setValue(res.data.confirm_password);
      this.userForm.controls.avatar.setValue(res.data.avatar);
  });

}
public confirmaractualizacion = () => {
  this.updateUser();

}

updateUser = () => {
  this.userService.updateUser(this.u.id , this.user).subscribe(res => {
    console.log('RES', res);
    this.route.navigate(['/perfil']);
  });
}
}
