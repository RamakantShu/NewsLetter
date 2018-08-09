import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Login } from '../model/Login';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private _http: HttpClient) { }

  public IsLoggedInStatus = false;

  AdminLogin(login:Login){
    // debugger;
    // this.loggedInStatus =  this._http.post<boolean>(this._loginUrl, login);
    // this.IsLoggedInStatus = this.loggedInStatus ? true:false;
    // return this.loggedInStatus;
    const fromData : FormData = new FormData();
    const endpoint='http://localhost:53099/api/login';
    fromData.append('logiId', login.LoginId);
    fromData.append('password', login.Password);
    this.IsLoggedInStatus=true;
    return this.IsLoggedInStatus;
    //return this._http.post(endpoint, FormData);
  }
}
