import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username = 'defaultUserName';
  password = 'defaultPassword';
  errorMessage = 'Error in the username and password';
  invalidLogin = false;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  handleLogin() {
    console.log(this.username);
    console.log(this.password);
    if (this.username === 'defaultUserName' && this.password === 'defaultPassword'){
      this.invalidLogin = false;
      this.router.navigate(['welcome', this.username]);
    }else{
      this.invalidLogin = true;
    }
  }
}
