import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;

  constructor(private AuthService: AuthService, private router: Router) {}

  submitLogin() {
    this.AuthService.login(this.loginForm.value).subscribe(
      (response) => {
        const token = response?.data?.token;
        if (token) {
          this.AuthService.setToken(token);

          this.router.navigate(['burger-menu']);
        }
      },
      (error) => {
        alert('Failed login');
      }
    );
  }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      username: new FormControl('', [Validators.required]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(5),
      ]),
    });
  }
}
