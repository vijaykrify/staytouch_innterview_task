import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router'
@Injectable({
  providedIn: 'root'
})
export class AuthguardService  {
  constructor(
    private router: Router
) {}
canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
  if (localStorage.getItem('valid')) {
      return true;
  }

  this.router.navigate(['/']);
  return false;
}
}


