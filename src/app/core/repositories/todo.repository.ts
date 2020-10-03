import {Observable} from 'rxjs';
import {TodoModel} from '../domain/todo.model';

export abstract class TodoRepository {

  abstract getTodoById(id: number): Observable<TodoModel>;

  abstract getTodos(): Observable<Array<TodoModel>>;

  abstract createTodo(todo: TodoModel): Observable<TodoModel>;

  abstract updateTodo(todo: TodoModel): Observable<TodoModel>;

  abstract deleteTodo(todo: TodoModel): Observable<TodoModel>;
}
