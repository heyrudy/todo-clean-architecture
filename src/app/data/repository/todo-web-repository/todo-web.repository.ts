import {Injectable} from '@angular/core';
import {TodoRepository} from '../../../core/repositories/todo.repository';
import {TodoModel} from '../../../core/domain/todo.model';
import {Observable} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {TodoWebRepositoryMapper} from './todo-web-repository-mapper';
import {map} from 'rxjs/operators';
import {TodoWebEntity} from './todo-web-entity';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root',
})
export class TodoWebRepository extends TodoRepository {

  private todosUrl = 'https://5f79f028e402340016f935a3.mockapi.io/api/v1/todos';

  constructor(private http: HttpClient,
              private mapper: TodoWebRepositoryMapper) {
    super();
  }

  getTodoById(id: number): Observable<TodoModel> {
    const url = `${this.todosUrl}/${id}`;
    return this.http
      .get<TodoWebEntity>(url)
      .pipe(map(this.mapper.mapFrom));
  }

  getTodos(): Observable<Array<TodoModel>> {
    const url = `${this.todosUrl}`;
    return this.http
      .get<Array<TodoWebEntity>>(url);
  }

  createTodo(todo: TodoModel): Observable<TodoModel> {
    const url = `${this.todosUrl}`;
    return this.http
      .post<TodoWebEntity>(url, todo, httpOptions)
      .pipe(map(this.mapper.mapFrom));
  }

  updateTodo(todo: TodoModel): Observable<TodoModel> {
    const url = `${this.todosUrl}/${todo.id}`;
    return this.http
      .put<TodoWebEntity>(url, todo, httpOptions);
  }

  deleteTodoById(id: number): Observable<TodoModel> {
    const url = `${this.todosUrl}/${id}`;
    return this.http
      .delete<TodoWebEntity>(url, httpOptions);
  }
}
