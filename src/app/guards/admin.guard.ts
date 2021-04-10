import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { UserService } from '../services/user.service';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {

  constructor(
    private authService:AuthService,
    private router:Router,
    private toastrService:ToastrService
  ){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if(this.authService.isAdmin()){
        this.router.navigate(["/"])
        this.toastrService.success("admin giriş yaptı")
        return true;
      } 
      else{
        this.router.navigate(["cars"])
        this.toastrService.error("Yetkiniz yok")
        return false;
      }
  }
  
}
