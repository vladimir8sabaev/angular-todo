import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { map, Observable, of } from 'rxjs';
import { Router } from '@angular/router';
import { User } from './item';
@Injectable({
  providedIn: 'root',
})
export class AuthServiceService {
  baseUrl: string = `${environment.backendOrigin}/auth`;
  constructor(private http: HttpClient, private routes: Router) {}

  login(email: string, password: string) {
    return this.http
      .post<{ token: string }>(`${this.baseUrl}/login`, {
        email: email,
        password: password,
      })
      .pipe(
        map((res) => {
          if (res.token) {
            this.routes.navigate(['dashboard']);
            localStorage.setItem('del_meetups_auth_token', res.token);
            let payload = res.token.split('.')[1];
            payload = window.atob(payload);
            console.log(JSON.parse(payload));
          }
          return res;
        })
      );
  }
  parseJwt(token: string) {
    let base64Url = token.split('.')[1];
    let base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    let jsonPayload = decodeURIComponent(
      window
        .atob(base64)
        .split('')
        .map(function (c) {
          return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
        })
        .join('')
    );
    return JSON.parse(jsonPayload);
  }

  public get user(): User | null {
    const token = localStorage.getItem('del_meetups_auth_token');
    if (token) {
      const user: User = this.parseJwt(token);
      return user;
    } else {
      return null;
    }
  }

  public get token(): string | null {
    return localStorage.getItem('del_meetups_auth_token');
  }

  logout() {
    localStorage.removeItem('del_meetups_auth_token');
    this.routes.navigate(['login']);
  }
}
