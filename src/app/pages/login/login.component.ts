import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(
    private authSrv: AuthenticationService
  ) { }

  ngOnInit() {
  }

  login() {
    this.authSrv.login();
  }

}
