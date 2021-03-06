import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {HardcodedAuthenticationService} from '../service/hardcoded-authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username = 'rompasaurus';
  password = 'password';
  errorMessage = 'Error in the username and password';
  invalidLogin = false;

  constructor(private router: Router, private hardcodedAuthenticationService: HardcodedAuthenticationService) { }

  ngOnInit(): void {
  }

  handleLogin() {
    console.log(this.username);
    console.log(this.password);
    if (this.hardcodedAuthenticationService.authenticate(this.username, this.password)){
      this.invalidLogin = false;
      this.router.navigate(['welcome', this.username]);
    }else{
      this.invalidLogin = true;
    }
  }
}
