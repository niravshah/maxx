import {Injectable} from "angular2/core";
import {TodoModel} from "./app.model";

@Injectable()
export class AppService{
    todos = [
        new TodoModel("eat"),
        new TodoModel("sleep"),
        new TodoModel("code")
    ];

}