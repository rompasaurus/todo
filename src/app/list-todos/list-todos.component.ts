import {Component, OnInit} from '@angular/core';
import {TodoDataService} from '../service/data/todo-data.service';
import {Router} from "@angular/router";
export class Todo{
  constructor(
    public id: number,
    public description: string,
    public done: boolean,
    public targetDate: Date
  ) {
  }
}
// noinspection AngularMissingOrInvalidDeclarationInModule
@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})

export class ListTodosComponent implements OnInit {
  todos;
  // todos = [
  //   new Todo(1, 'Learn To Dance', false, new Date()),
  //   new Todo(2, 'take a shit', false, new Date()),
  //   new Todo(3, 'Visit japan', false, new Date())
  //   ];
  message: string;
  constructor(private router: Router,private todoDataService: TodoDataService) {
  }

  generateTodos(username) {
    this.todoDataService.retrieveAllTodos(username).subscribe(
    response => this.todos = response,
    error => console.log('In valid data returns error: ' + error.error.message)
    );
  }

  ngOnInit(): void {
    this.refreshTodos();
  }

  refreshTodos(){
    this.todoDataService.retrieveAllTodos('username').subscribe(
      response => this.todos = response,
      error => console.log('Invalid data returns error: ' + error.error.message)
    );
  }

  deleteTodo(id) {
    this.todoDataService.deleteTodo('rompasaurus', id).subscribe(
      response => {
        console.log('Todo with id: ' + id + 'successfully deleted ');
        this.message = `Delete of Todo with id: ${id} was successful`;
        this.refreshTodos();
      } ,
      error => console.log('Error Deleting Todo: ' + error.error.message)
    );
  }

  updateTodo(id) {
      this.router.navigate(['todos' , id]);
  }
}
