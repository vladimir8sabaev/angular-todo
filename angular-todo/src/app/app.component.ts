import { Component } from '@angular/core';
import { AuthServiceService } from './auth-service.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(
    private authService: AuthServiceService,
    private routes: Router
  ) {}
  goLogout() {
    this.authService.logout();
  }
  goDashboard() {
    this.routes.navigate(['dashboard']);
  }
  goAbout() {
    this.routes.navigate(['about']);
  }
  goLogin() {
    this.routes.navigate(['login']);
  }
}
