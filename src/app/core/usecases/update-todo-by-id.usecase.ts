import {Injectable} from '@angular/core';
import {TodoRepository} from '../repositories/todo.repository';
import {UseCase} from '../base/use-case';
import {TodoModel} from '../domain/todo.model';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UpdateTodoByIdUsecase implements UseCase<TodoModel, TodoModel> {

  constructor(private todoRepository: TodoRepository) {
  }

  execute(params: TodoModel): Observable<TodoModel> {
    return this.todoRepository.updateTodo(params);
  }
}
