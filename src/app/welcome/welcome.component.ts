import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {WelcomeDataService} from '../service/data/welcome-data.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  Name = 'Blank';
  Message = 'default message';
  Subscript: Subscription;
  MessageWParams = 'empty';

  constructor(
    private route: ActivatedRoute,
    private welcomeDataService: WelcomeDataService) { }

  ngOnInit(){
    console.log(this.route.snapshot.params.name);
    this.Name = this.route.snapshot.params.name;
  }

  getWelcomeMessage() {
    console.log(this.welcomeDataService.executeHelloWorldBeanService());
    this.Subscript = this.welcomeDataService.executeHelloWorldBeanService().subscribe(
      response => console.log(response.message)
    );
    console.log('last line of get welcome message' );
    this.Message = 'fuk';
  }

  getWelcomeMessageWithParameter() {
    this.welcomeDataService.executeHelloWorldServiceWithPathVariable(this.Name).subscribe(
  response => this.MessageWParams = `Name Pulled ${this.Name} Message: ${response.message}`,
  error => console.log('error Yo' + error.error.message)
    );
  }

  handleSuccessfulResponse(response) {
    console.log(response.message);
  }
}
