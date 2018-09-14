import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import {ModerService} from './moder.service';

@Injectable({
  providedIn: 'root'
})
export class AuthokToItemsGuard implements CanActivate {
    constructor(private moderService:  ModerService, private router: Router) {}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      if (!this.moderService.token) {
          return true;
      }
      this.router.navigate(['items']);
  }
}
