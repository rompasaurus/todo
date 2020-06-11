import { Component, OnInit } from '@angular/core';
import {Todo, TodoDataService} from '../service/data/todo-data.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  Id: number;
  todo: Todo;
  constructor( private route: ActivatedRoute, private todoDataService: TodoDataService) { }

  ngOnInit(): void {
    this.Id = this.route.snapshot.params.name;
    this.todoDataService.retrieveTodo('rompasaurus', this.Id).subscribe(
      response => this.todo = response,
      error => console.log('Error Pulling todo data: ' + error.error.message)
    );
  }

}
