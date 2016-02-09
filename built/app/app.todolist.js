System.register(['angular2/core', './app.service', './app.todo-item-renderer'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, app_service_1, app_todo_item_renderer_1;
    var TodoList;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (app_service_1_1) {
                app_service_1 = app_service_1_1;
            },
            function (app_todo_item_renderer_1_1) {
                app_todo_item_renderer_1 = app_todo_item_renderer_1_1;
            }],
        execute: function() {
            TodoList = (function () {
                function TodoList(todoService) {
                    this.todoService = todoService;
                }
                TodoList = __decorate([
                    core_1.Component({
                        selector: 'todo-list',
                        directives: [app_todo_item_renderer_1.TodoItemRenderer],
                        template: "<div><ul><li *ngFor=\"#todo of todoService.todos\"><todo-item-renderer [todo]=\"todo\"></todo-item-renderer><button (click)=\"todo.toggle()\">Click</button></li></ul></div>"
                    }), 
                    __metadata('design:paramtypes', [app_service_1.AppService])
                ], TodoList);
                return TodoList;
            })();
            exports_1("TodoList", TodoList);
        }
    }
});
//# sourceMappingURL=app.todolist.js.map