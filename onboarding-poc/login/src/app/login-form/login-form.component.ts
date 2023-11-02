import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})

export class LoginFormComponent {
  
  submit = false;
  isVisible = false;
  isvalidUser = false;
  errorMessage: string = '';
  
  constructor( private router: Router ) {}

  togglePassword() {
    this.isVisible = !this.isVisible;
  }
  
  loginForm = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  });
  
  get myfunc() { return this.loginForm.controls; }

  onSubmit() {
    const username = this.myfunc.username.value;
    const password = this.myfunc.password.value;
    localStorage.setItem('user','validuser');
    localStorage.setItem('pwd', 'samcotrade');

    this.submit = true;

    if (this.loginForm.invalid) {
      console.log(this.loginForm.value);
      console.log('Invalid credentials');
      return;
    }
    
    if(username === localStorage.getItem('user') && password === localStorage.getItem('pwd')) {
      this.router.navigateByUrl("/user-details");
      console.log(this.loginForm.value);
      console.log('User login verified!');
    }

    if(username !== localStorage.getItem('user')) {
      this.isvalidUser = true;
      console.log(this.loginForm.value);
      console.log('Invalid username');
      this.errorMessage = 'Invalid username'
    }

    if(password !== localStorage.getItem('pwd')) {
      this.isvalidUser = true;
      console.log(this.loginForm.value);
      console.log('Invalid password');
      this.errorMessage = 'Invalid password'
    }

    if(username !== localStorage.getItem('user') && password !== localStorage.getItem('pwd')) {
      this.isvalidUser = true;
      console.log(this.loginForm.value);
      console.log('Invalid user credentials');
      this.errorMessage = 'Invalid user credentials'
    }
  }    

  onKeyPress(event: KeyboardEvent): boolean {
    const regex = /[0-9a-zA-Z]/i;
    const isValidInput = regex.test(event.key);
    return isValidInput;
  }

  // Detailspage() {
  //   this.router.navigate(['/user-details']);
  //   this.router.navigateByUrl('/user-details');
  // }
  
}
