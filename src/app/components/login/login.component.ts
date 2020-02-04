import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor(private fb: FormBuilder, private userSvc: UserService, private router:Router) {
    this.loginForm = this.fb.group({
      username: new FormControl("", Validators.required),
      password: new FormControl("", Validators.required)
    })
  }

  public get Username() {
    return this.loginForm.controls["username"];
  }
  public get Password() {
    return this.loginForm.controls["password"];
  }

  ngOnInit() {
  }
  login() {
    if(this.loginForm.valid){
      this.userSvc.saveUserState(this.loginForm.value);
      this.router.navigate(['/']);
    }
  }
}
