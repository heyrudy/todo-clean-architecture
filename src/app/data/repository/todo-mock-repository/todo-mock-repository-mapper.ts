import {TodoModel} from '../../../core/domain/todo.model';
import {Mapper} from '../../../core/base/mapper';
import {TodoMockEntity} from './todo-mock-entity';

export class TodoMockRepositoryMapper extends Mapper <TodoMockEntity, TodoModel> {
  mapFrom(param: TodoMockEntity): TodoModel {
    return {
      title: param.title,
      task: param.task,
      completed: param.completed
    };
  }

  mapTo(param: TodoModel): TodoMockEntity {
    return {
      id: 0,
      title: param.title,
      task: param.task,
      completed: param.completed
    };
  }
}
