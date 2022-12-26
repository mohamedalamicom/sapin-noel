import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from '../_models/User';
import { LoginService } from '../_services/loginService';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm!: FormGroup;
  user!: User;
  error: string = '';

  constructor(private formBuilder: FormBuilder, private httpClient: HttpClient, private loginService: LoginService) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      username: ['', [
        Validators.required
       ]],
      password: ['', [
        Validators.required,
      ]]
    })
  }

  get username() {
    return this.loginForm.get('username');
  }

  get password() {
    return this.loginForm.get('password');
  }

  auth() {
    if (!this.loginForm.valid) {
      this.error = "Empty credentials";
      return;
    }

    this.httpClient.post<User>('https://dummyjson.com/auth/login', this.loginForm.value).subscribe(result => {
      this.user = result;
      localStorage.setItem('user', JSON.stringify(this.user));
    }, (err) => {
      this.error = err.error.message;
    })
  }

}
