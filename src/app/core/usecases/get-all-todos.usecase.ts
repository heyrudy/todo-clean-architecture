import { Injectable } from '@angular/core';
import { TodoRepository } from '../repositories/todo.repository';
import { UseCase } from '../base/use-case';
import { TodoModel } from '../domain/todo.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GetTodosUsecase implements UseCase<void, Array<TodoModel>> {

  constructor(private todoRepository: TodoRepository) {}

  execute(): Observable<Array<TodoModel>> {
    return this.todoRepository.getTodos();
  }
}
