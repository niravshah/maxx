import {Component} from 'angular2/core';
import {AppService} from './app.service';
import {TodoItemRenderer} from './app.todo-item-renderer'

@Component({
    selector: 'todo-list',
    directives:[TodoItemRenderer],
    template: '<div><ul><li *ngFor="#todo of todoService.todos"><todo-item-renderer [todo]="todo"></todo-item-renderer><button (click)="todo.toggle()">Click</button></li></ul></div>'
})


export class TodoList {
  constructor(public todoService:AppService){}
}