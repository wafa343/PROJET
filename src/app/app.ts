import { Component } from '@angular/core';
import {  Router,RouterOutlet } from '@angular/router';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AuthService } from './auth.service';

 
@Component({
  selector: 'app-root',
  imports: [RouterOutlet,CommonModule, FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'projet';
  email = '';
  password = '';

  constructor(private authService: AuthService, private router: Router) {}

  onSubmit() { 
    this.authService.login({ email: this.email, password: this.password })
      .subscribe({
        next: (res) => {
          console.log('Login success', res);  
          this.router.navigate(['/dashboard']);
        },
        error: (err) => {
          console.error('Login failed', err);
        }
      });
      
  
}
}
