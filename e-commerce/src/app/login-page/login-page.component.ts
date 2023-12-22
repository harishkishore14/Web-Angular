import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent {
  submitted = false;
  isVisible = false;
  invalidUser = false;
  errorMessage: string = '';
  user = 'validuser';
  pwd = 'ecommerce';
  
  constructor( private router: Router ) {}

  togglePassword() {
    this.isVisible = !this.isVisible;
  }
  
  loginForm = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  });

  get controls() { return this.loginForm.controls; }

  onSubmit() {
    // debugger;
    const username = this.controls.username.value;
    const password = this.controls.password.value;
    localStorage.setItem('user','validuser');
    localStorage.setItem('pwd', 'ecommerce');

    this.submitted = true;

    if (this.loginForm.invalid) {
      console.log(this.loginForm.value);
      console.log('Invalid credentials');
      return;
    }
    
    if(username === localStorage.getItem('user') && password === localStorage.getItem('pwd')) {
      this.router.navigateByUrl("/home");
      console.log(this.loginForm.value);
      console.log('User login verified!');
    }

    if(username !== localStorage.getItem('user')) {
      this.invalidUser = true;
      console.log(this.loginForm.value);
      console.log('Invalid username');
      this.errorMessage = 'Invalid username';
    }

    if(password !== localStorage.getItem('pwd')) {
      this.invalidUser = true;
      console.log(this.loginForm.value);
      console.log('Invalid password');
      this.errorMessage = 'Invalid password';
    }

    if(username !== localStorage.getItem('user') && password !== localStorage.getItem('pwd')) {
      this.invalidUser = true;
      console.log(this.loginForm.value);
      console.log('Invalid user credentials');
      this.errorMessage = 'Invalid user credentials';
    }
  }

  onKeyPress(event: KeyboardEvent): boolean {
    const regex = /[0-9a-zA-Z]/i;
    const isValidInput = regex.test(event.key);
    return isValidInput;
  }
}
