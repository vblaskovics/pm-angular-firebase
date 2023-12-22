import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private formBuilder: FormBuilder, private authService:AuthService) { }

  loginForm = this.formBuilder.group({
    email: ['', [Validators.required]],
    password: ['', [Validators.required]]
  });

  onSubmit() {
    console.log('Submitted', this.loginForm.value);

    if (this.loginForm.invalid) {
      return;
    }

    let email = this.loginForm.value.email ?? "";
    let password = this.loginForm.value.password ?? "";

    this.authService.login(email, password).then((result) => {
      // Signed in
      const user = result.user;
      console.log('User', user);
    }).catch((error) => {
      // Not signed in
      console.log('Error', error);
    });
  }

}
