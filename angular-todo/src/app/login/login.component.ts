import { Component } from '@angular/core';
import { AuthServiceService } from '../auth-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  constructor(
    private authService: AuthServiceService,
    private router: Router
  ) {}
  loginObj = {
    email: '',
    password: '',
  };
  login() {
    this.authService
      .login(this.loginObj.email, this.loginObj.password)
      .subscribe((res: any) => console.log(res));
  }
}
