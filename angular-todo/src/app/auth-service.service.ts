import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { map, Observable, of } from 'rxjs';
import { Router } from '@angular/router';
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
            localStorage.setItem('del_meetups_auth_token', res.token);
          }
          return res;
        })
      );
  }
}
