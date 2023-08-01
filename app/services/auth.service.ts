import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of, throwError } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient, private router: Router) {}

  setToken(token: string) {
    localStorage.setItem('token', token);
  }

  getToken() {
    return localStorage.getItem('token');
  }

  isLoggedIn() {
    return this.getToken() !== null;
  }

  login({
    username,
    password,
  }: {
    username: string;
    password: string;
  }): Observable<any> {
    return this.http.post<any>('http://172.16.16.90:7007/auth/login', {
      username,
      password,
    });
  }

  createUser(userData: any): Observable<any> {
    const headers = {
      Authorization: 'Token',
    };

    return this.http.post<any>(
      'http://172.16.16.90:7007/api/v1/user/create',
      userData,
      { headers }
    );
  }
}
