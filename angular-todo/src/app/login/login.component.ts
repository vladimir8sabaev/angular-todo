import { Component } from '@angular/core';
import { AuthServiceService } from '../auth-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  constructor(private authService: AuthServiceService) {}
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
