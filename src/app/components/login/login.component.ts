import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { User } from 'src/app/models/user';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  submitted = false;
  loginForm: FormGroup;
  formError: string;
  user: User = {};

  constructor(
    private localStorage: LocalStorageService,
    private formBuilder: FormBuilder,
    private userService: UserService,
    private route: Router,
    private title: Title
  ) {}

  ngOnInit(): void {
    this.title.setTitle('Login');
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required, Validators.email],
      password: ['', Validators.required, Validators.minLength(8)],
    });
  }

  public Submit = () => {

    this.submitted = true;

    if (!this.loginForm.controls.email || !this.loginForm.controls.password) {
      return (this.formError = 'Se tiene que rellenar todos los campos');
    }
    if (!this.formError) {
      this.user.email = this.loginForm.controls.email.value;
      this.user.password = this.loginForm.controls.password.value;
      this.loginUser();
    }
  }

  loginUser = () => {


    this.userService.loginUser(this.user).subscribe(
      (res) => {
        this.userService.getUserById('1').subscribe(
          // tslint:disable-next-line:no-shadowed-variable
          ( res ) => {
            this.user.id = res.data.id;
            this.user.first_name = res.data.first_name;
            this.user.last_name = res.data.last_name;
            this.user.email = res.data.email;
            this.user.avatar = res.data.avatar;

            this.localStorage.setToken(JSON.stringify(this.user));

            this.route.navigate(['']);
          },
          (error) => {
            console.log(error);
          }
        );
      },
      (error) => {
        console.log(error);
      }
    );
  }

  onReset = () => {
    this.submitted = false;
    this.loginForm.reset();
  }
}
