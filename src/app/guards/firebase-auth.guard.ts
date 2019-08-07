import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, CanActivate, Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class FirebaseAuthGuard implements CanActivate {
  
  constructor(
    private firebaseAuth: AngularFireAuth,
    private router: Router
  ) { }

  async canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const user = this.firebaseAuth.authState.pipe(first()).toPromise();
    if(!user) {
      this.router.navigate(['/login']);
      return false;
    }
    return true;
  }
  
}
