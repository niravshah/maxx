import {Component,Input} from 'angular2/core';


@Component({
    selector: 'todo-item-renderer',
    template: `<style>.completed{text-decoration:line-through}</style><span [ngClass] = "todo.status">{{todo.title}}</span>`
})


export class TodoItemRenderer {
  @Input() todo;
}