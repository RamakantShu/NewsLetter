import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { LocalStorageService } from 'ngx-webstorage';

import {AccountService} from '../services/account.service'
import { Login } from '../model/login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  angForm: FormGroup;
  userName = "";
  password = "";
  isLoggedInUser;
  msg="";
  loggedInDateTime;
  productList;
  login=new Login();

  constructor(
    private router: Router, 
    private fb: FormBuilder,
    private loginService: AccountService,
    private localSt:LocalStorageService
  ) 
  {
    this.angForm = fb.group({
      userName: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  ngOnInit() {
    if(this.localSt.retrieve("IsLoggedinUser") == "true" )
    {
      this.router.navigate(['../admin']);
    }
  }

  LoginUser(e) {
    e.preventDefault();
        this.login.LoginId=this.userName;
        this.login.Password=this.password;
        this.isLoggedInUser = this.loginService.AdminLogin(this.login);
//.subscribe(res => {
             debugger;
             this.localSt.store("IsLoggedinUser", "true");
             if(this.localSt.retrieve("IsLoggedinUser") == "true" )//if(this.loginService.IsLoggedInStatus)
             {
                this.localSt.store("IsLoggedinUser", "true");
                this.router.navigate(['../admin']);
             }
             else
             {
                this.msg = "Your credientials is not correct, please try with correct credientials.";
             }
         //},
         ////error => console.error(error)
        //);
  }
}
