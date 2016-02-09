import {bootstrap}    from 'angular2/platform/browser'
import {Component} from 'angular2/core';
import {AppComponent} from './app.component'
import {AppService} from './app.service'
import {TodoList} from './app.todolist'

@Component({
    selector:'my-app',
    directives:[AppComponent, TodoList],
    templateUrl:'app/template/main_tmpl.html'
})
class App{}

bootstrap(App,[AppService]);
