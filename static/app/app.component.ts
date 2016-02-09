import {Component} from 'angular2/core';
import {AppService} from './app.service';
import {TodoModel} from './app.model';

@Component({
    selector: 'app-comp',
    template: '<form (submit)="onSubmit()"><input type="text" [(ngModel)]="todoModel.title"></form>'
})

export class AppComponent { 

    todoModel : TodoModel = new TodoModel();
    constructor(public appService:AppService){};
    onSubmit(){
        this.appService.todos.push(this.todoModel);
        this.todoModel = new TodoModel();
    };
}