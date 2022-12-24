import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  firstname: string = '';
  lastname: string = '';
  username: string = '';
  password: string = '';
  errorMsg: string = '';

  constructor(private auth: AuthService, private router: Router) {}

  ngOnInit(): void {}

  register() {
    if (this.firstname.trim().length === 0) {
      this.errorMsg = 'Firstname is required';
    } else if (this.lastname.trim().length === 0) {
      this.errorMsg = 'Lastname is required';
    } else if (this.username.trim().length === 0) {
      this.errorMsg = 'Username is required';
    } else if (this.password.trim().length === 0) {
      this.errorMsg = 'Password is required';
    } else {
      this.errorMsg = '';
      this.auth
        .register({
          firstname: this.firstname,
          lastname: this.lastname,
          username: this.username,
          password: this.password,
        })
        .subscribe((res) => {
          console.log('token', res);
          if (res) {
            this.router.navigate(['']);
          }
          if (!res) {
            this.errorMsg = 'Invalid Credentials';
          }
        });
    }
  }
}
