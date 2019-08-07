import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(
    private firebaseAuth: AngularFireAuth
  ) { }

  login() {
    this.firebaseAuth.auth
    .signInWithPopup(new auth.GoogleAuthProvider())
    .then(response => console.log(response));
  }
}
