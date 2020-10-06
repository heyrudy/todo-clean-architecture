import {Injectable} from '@angular/core';
import {TodoRepository} from '../repositories/todo.repository';
import {UseCase} from '../base/use-case';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DeleteTodoByIdUsecase implements UseCase<number, {}> {

  constructor(private todoRepository: TodoRepository) {
  }

  execute(params: number): Observable<{}> {
    return this.todoRepository.deleteTodoById(params);
  }
}
