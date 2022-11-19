import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/user';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  isLoggedIn: boolean = false;

  constructor(private router: Router) {
    if (localStorage.getItem('user')) this.isLoggedIn = true;
  }

  register(user: User) {}

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
