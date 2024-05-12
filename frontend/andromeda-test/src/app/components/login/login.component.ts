import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { AppComponent } from 'src/app/app.component';
import { AndromedaToolsComponent } from 'src/app/tools/andromeda-tools.component';
import { Login } from './model/login';
import { LoginServices } from './services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  form: FormGroup;
  passwordVisible: boolean = false;
  rememberData: boolean = false;
  cookieName: string = 'andromeda';
  login: Login = new Login();
  loginError: boolean = false;

  constructor(
    public appComponent: AppComponent,
    private formBuilder: FormBuilder,
    private cookieService: CookieService,
    public tools: AndromedaToolsComponent,
    private router: Router,
    private service: LoginServices
  ) {
    this.form = this.formBuilder.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required]],
      rememberData: [false],
    });

    this.rememberDataCheck();
  }

  get usuarioValido() {
    return this.form.get('email')?.invalid && this.form.get('email')?.touched;
  }

  get passwordValido() {
    return (
      this.form.get('password')?.invalid && this.form.get('password')?.touched
    );
  }

  submit() {
    this.loginError = false;

    if (this.form.invalid) {
      return Object.values(this.form.controls).forEach((control) => {
        control.markAllAsTouched();
      });
    }

    this.login.username = this.form.value.email;
    this.login.password = this.form.value.password;

    this.service
      .login({
        username: this.form.value.email,
        password: this.form.value.password,
      })
      .subscribe({
        next: (response: HttpResponse<any>) => {
          console.log('Respuesta del servidor:', response);
          if (response.status === 200) {
            console.log('entrando');
            this.router.navigateByUrl('/dashboard');
          }
        },
        error: (error: HttpErrorResponse) => {
          if (error.status === 401) {
            this.loginError = true;
          }
        },
      });
  }

  invalidForm() {
    if (this.form.invalid) {
      return Object.values(this.form.controls).forEach((control) => {
        control.markAllAsTouched();
      });
    }
  }

  changeRememberDataCheck() {
    if (this.rememberData) {
      const encryptData = this.tools.encryptAes(
        this.form.value.email + ':' + this.form.value.password
      );
      this.cookieService.set(this.cookieName, encryptData);
    } else {
      this.cookieService.delete(this.cookieName, '/');
      this.cookieService.delete(this.cookieName, '/andromeda');
    }
  }

  toggleRememberData() {
    if (this.rememberData) {
      const encryptData = this.tools.encryptAes(
        this.form.value.email + ':' + this.form.value.password
      );
      this.cookieService.set(this.cookieName, encryptData);
    } else {
      this.cookieService.delete(this.cookieName, '/');
      this.cookieService.delete(this.cookieName, '/andromeda');
    }
  }

  rememberDataCheck() {
    this.rememberData = this.cookieService.get(this.cookieName) != '';

    if (this.rememberData && this.cookieService.get(this.cookieName) != '') {
      const decryptedCookie = this.tools.decryptAes(
        this.cookieService.get(this.cookieName)
      );
      const [email, password] = decryptedCookie.split(':');

      this.form.get('email')?.setValue(email);
      this.form.get('password')?.setValue(password);
    }
  }

  togglePasswordVisibility(): void {
    this.passwordVisible = !this.passwordVisible;
  }
}
