import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import {Router} from '@angular/router';
import { LocalStorageService } from 'ngx-webstorage'

//import { AccountService } from './services/account.service'


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(
    //private auth: AccountService,
    private router: Router,
    private localSt:LocalStorageService
  ) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    debugger;
    if(this.localSt.retrieve("IsLoggedinUser") == "true" )//if(this.auth.IsLoggedInStatus)
    {
      return true;
    }
    else
    {
      debugger;
      //this.auth.loggedInStatus=this.auth.isAuthorizedUser()
      this.router.navigate(['admin/login']);
      return false;
    }
    
  }
}
