import {Injectable} from '@angular/core';
import {TodoRepository} from '../repositories/todo.repository';
import {UseCase} from '../base/use-case';
import {TodoModel} from '../domain/todo.model';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetTodoByIdUsecase implements UseCase<number, TodoModel> {

  constructor(private todoRepository: TodoRepository) {
  }

    execute(param: number): Observable<TodoModel> {
    return this.todoRepository.getTodoById(param);
  }
}
