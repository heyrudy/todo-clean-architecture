import {Injectable} from '@angular/core';
import {Mapper} from '../../../core/base/mapper';
import {TodoMockEntity} from './todo-mock-entity';
import {TodoModel} from '../../../core/domain/todo.model';

@Injectable({
  providedIn: 'root',
})
export class TodoMockRepositoryMapper extends Mapper <TodoMockEntity, TodoModel> {
  mapFrom(param: TodoMockEntity): TodoModel {
    return {
      id: param.id,
      title: param.title,
      task: param.task,
      completed: param.completed
    };
  }

  mapTo(param: TodoModel): TodoMockEntity {
    return {
      id: param.id,
      title: param.title,
      task: param.task,
      completed: param.completed
    };
  }
}
