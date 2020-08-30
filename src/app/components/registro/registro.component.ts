import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { contracomparacion } from 'src/app/helpers/contracomparacion';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';
@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss']
})
export class RegistroComponent implements OnInit {
  registerForm: FormGroup;
    submitted = false;
    user: User = {};
  constructor( private formBuilder: FormBuilder,  private userService: UserService) { }

  ngOnInit(): void {

    this.registerForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required],
      acceptTerms: [false, Validators.requiredTrue]
  }, {
    validators: [
      contracomparacion('password', 'confirmPassword'),
    ]
  });
}
  get f(): any { return this.registerForm.controls; }

  onSubmit(): void {
  this.submitted = true;

  if (this.registerForm.invalid) {
      return;
  }
  this.user.email = this.registerForm.controls.email.value;
  this.user.password = this.registerForm.controls.password.value;
  this.submitted = true;
  this.registerUser();

}
registerUser = () => {
  this.userService.registerUser(this.user).subscribe((res) => {
    console.log('RES', res);
    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value, null, 4));
  });

}
  onReset(): void {
  this.submitted = false;
  this.registerForm.reset();
}
}
