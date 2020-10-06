import {Injectable} from '@angular/core';
import {Mapper} from '../../../core/base/mapper';
import {TodoModel} from '../../../core/domain/todo.model';
import {TodoWebEntity} from './todo-web-entity';

@Injectable({
  providedIn: 'root',
})
export class TodoWebRepositoryMapper extends Mapper <TodoWebEntity, TodoModel> {
  mapFrom(param: TodoWebEntity): TodoModel {
    return {
      title: param.title,
      task: param.task,
      completed: param.completed
    };
  }

  mapTo(param: TodoModel): TodoWebEntity {
    return {
      id: 0,
      title: param.title,
      task: param.task,
      completed: param.completed
    };
  }
}
