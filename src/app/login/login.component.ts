import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { first } from 'rxjs/operators';
import { Router } from '@angular/router';
import { User } from '../model/user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form: FormGroup;
  user: User;
  submitted = false;
  returnUrl = '/posts';
  loginInvalid: boolean;
  error = '';

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private authService: AuthService
  ) { 
    this.authService.user.subscribe(x => this.user = x);
  }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
        username: ['', Validators.required],
        password: ['', Validators.required]
    });
  }
  
  onSubmit() {
    this.loginInvalid = false;
    if (this.form.invalid) {
      this.error = 'Please enter a valid username and password';
      return;
    }
    const username = this.form.get('username').value;
    const password = this.form.get('password').value;
    this.authService.login(username, password)
        .pipe(first())
        .subscribe({
            next: () => {
                this.router.navigate([this.returnUrl]);
            },
            error: error => {
                //console.log(error);
                this.error = error.error;
            }
          });
    
  }
}
