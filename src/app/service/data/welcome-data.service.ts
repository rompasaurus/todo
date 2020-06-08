import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

export class HelloWorldBean {
  constructor(
    public message: string,
    public anotherMessage: string){}
}
@Injectable({
  providedIn: 'root'
})
export class WelcomeDataService {

  constructor(
    private httpClient: HttpClient
  ) { }

  executeHelloWorldBeanService() {
    return this.httpClient.get<HelloWorldBean>('http://localhost:8080/hello-world-bean');
  }
  // hello-world/path-variable/{name} - http://localhost:8080/hello-world/path-variable/{in28minutes}
  executeHelloWorldServiceWithPathVariable(name) {
    return this.httpClient.get<HelloWorldBean>(`http://localhost:8080/hello-world/path-variable/${name}`);
  }
}
