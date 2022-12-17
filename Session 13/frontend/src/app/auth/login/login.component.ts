import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  username: string = '';
  password: string = '';
  errorMsg: string = '';

  constructor(private auth: AuthService, private router: Router) {}

  ngOnInit(): void {}

  login() {
    if (this.username.trim().length === 0) {
      this.errorMsg = 'Username is required';
    } else if (this.password.trim().length === 0) {
      this.errorMsg = 'Password is required';
    } else {
      this.errorMsg = '';
      let res = this.auth.login(this.username, this.password);
      if (res === 200) {
        this.router.navigate(['']);
      }
      if (res === 403) {
        this.errorMsg = 'Invalid Credentials';
      }
    }
  }
}
