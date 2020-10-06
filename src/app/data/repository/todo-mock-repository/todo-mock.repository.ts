import { Injectable } from '@angular/core';
import { TodoRepository } from '../../../core/repositories/todo.repository';
import { TodoModel } from '../../../core/domain/todo.model';
import { from, Observable, of } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { TodoMockEntity } from './todo-mock-entity';
import { TodoMockRepositoryMapper } from './todo-mock-repository-mapper';

@Injectable({
  providedIn: 'root',
})
export class TodoMockRepository extends TodoRepository {

  todos = [
    {
      id: 1,
      title: 'decision',
      task: 'decide to go somewhere',
      completed: true,
    },
    {
      id: 2,
      title: 'action',
      task: 'go somewhere',
      completed: false,
    },
    {
      id: 3,
      title: 'revision',
      task: 'come back Home',
      completed: true,
    },
  ];

  constructor(private mapper: TodoMockRepositoryMapper) {
    super();
  }

  getTodoById(id: number): Observable<TodoModel> {
    return from(this.todos)
      .pipe(filter((todoMock: TodoMockEntity) => todoMock.id === id))
      .pipe(map(this.mapper.mapFrom));
  }

  getTodos(): Observable<Array<TodoModel>> {
    return of(this.todos.map(this.mapper.mapFrom));
  }

  createTodo(todo: TodoModel): Observable<TodoModel> {
    let todoDto = this.mapper.mapTo(todo);
    todoDto = { id: this.todos.length + 1, ...todoDto };
    this.todos.push(todoDto);
    return of(todo);
  }

  updateTodo(todo: TodoModel): Observable<TodoModel> {
    from(this.todos)
      .pipe(filter((todoMock: TodoMockEntity) => todoMock.id === todo.id))
      .pipe(
        map((todoMock: TodoMockEntity) => {
          return {
            ...todoMock,
            title: todo.title,
            task: todo.task,
            completed: todo.completed,
          };
        })
      );
    return of(todo);
  }

  deleteTodoById(id: number): Observable<{}> {
    return from(this.todos)
      .pipe(filter((todoMock: TodoMockEntity) => todoMock.id === id))
      .pipe(map(this.mapper.mapFrom));
  }
}
