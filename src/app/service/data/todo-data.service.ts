import { Injectable } from '@angular/core';
import {HttpClient, HttpClientModule} from '@angular/common/http';
export class Todo{
  constructor(
    public id: number,
    public username: string,
    public description: string,
    public targetDate, date,
    public isDone: boolean
  ) {
  }
}

@Injectable({
  providedIn: 'root'
})
export class TodoDataService {

  constructor(private http: HttpClient) { }

  // This method takes the list provided by spring from the rest api endpoint of /user/{username}/todos
  //  and stores returns it as an array in js to be present to the ui
  retrieveAllTodos(username) {
    return this.http.get<Todo[]>(`http://localhost:8080/users/${username}/todos`);
  }

  retrieveTodo(username, id) {
    return this.http.get<Todo>(`http://localhost:8080/users/${username}/todos/${id}`);
  }

  deleteTodo(username, id) {
    return this.http.delete(`http://localhost:8080/users/${username}/todos/${id}`);
  }

  updateTodo(username, id) {
      return this.http.get(`http://localhost:8080/users/${username}/todos/${id}`);
    }
}
