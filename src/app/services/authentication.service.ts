import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private currentUser: any;

  constructor(
    private firebaseAuth: AngularFireAuth,
    private router: Router
  ) { 
    this.firebaseAuth.authState.subscribe(user => {
      this.currentUser = user;
      if( user ) {
        this.router.navigate(['notes']);
      } else {
        this.router.navigate(['login']);
      }
    })
  }

  login() {
    this.firebaseAuth.auth
    .signInWithPopup(new auth.GoogleAuthProvider())
    .then(response => console.log(response));
  }

  logout() {
    this.firebaseAuth.auth.signOut();
  }

  getUser() {
    return this.currentUser;
  }

  isAuthenticated() {
    return this.currentUser != null;
  }

}
