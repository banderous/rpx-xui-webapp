import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RedirectGuard implements CanActivate {
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    const cid = next.paramMap.get('cid');
    if (!cid.startsWith('15')) {
      window.location.href = 'http://localhost:4200/cases/' + cid
    }
    return true;
  }
}
