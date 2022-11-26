import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/user';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  isLoggedIn: boolean = false;

  constructor(private router: Router, private httpClient: HttpClient) {
    if (localStorage.getItem('user')) this.isLoggedIn = true;
  }

  register(user: User): Observable<User[]> {
    localStorage.setItem('user', user.username);
    this.isLoggedIn = true;
    return this.httpClient.post<User[]>(
      'http://localhost:3000/api/users',
      user
    );
  }

  login(username: string, password: string) {
    if (username === 'moha' && password === '123') {
      localStorage.setItem('user', username);
      this.isLoggedIn = true;
      return 200;
    } else {
      return 403;
    }
  }

  logout() {
    localStorage.removeItem('user');
    this.isLoggedIn = false;
    this.router.navigate(['login']);
  }

  isAuthenticated() {
    return this.isLoggedIn;
  }
}
