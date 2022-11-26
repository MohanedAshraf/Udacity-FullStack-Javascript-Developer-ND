import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  constructor(private authService: AuthService, private router: Router) {}
  user = localStorage.getItem('user');
  ngOnInit(): void {}

  logout() {
    this.authService.logout();
  }
  gotoUser() {
    this.router.navigate(['user', this.user]);
  }
  gotoRegister() {
    this.router.navigate(['register']);
  }
  gotoLogin() {
    this.router.navigate(['login']);
  }
}
