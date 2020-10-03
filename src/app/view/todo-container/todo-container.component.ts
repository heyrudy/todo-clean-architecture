import {GetTodosUsecase} from '../../core/usecases/get-all-todos.usecase';
import {Component, OnInit} from '@angular/core';
import {TodoModel} from 'src/app/core/domain/todo.model';
import {DeleteTodoUsecase} from '../../core/usecases/delete-todo-usecase.service';

@Component({
  selector: 'hr-todo-container',
  templateUrl: './todo-container.component.html',
  styleUrls: ['./todo-container.component.scss']
})
export class TodoContainerComponent implements OnInit {

  todos: Array<TodoModel>;

  constructor(private getTodosUsecase: GetTodosUsecase,
              private deleteTodoByIdUsecase: DeleteTodoUsecase) {
  }

  ngOnInit(): void {
    this.getTodosUsecase.execute()
      .subscribe(todos =>
        this.todos = todos);
  }

  onDelete(todoToBeDeleted: TodoModel): void {
    // Delete on UI
    this.todos = this.todos.filter(todo => todo !== todoToBeDeleted);

    // Delete on Server
    this.deleteTodoByIdUsecase.execute(todoToBeDeleted);
  }
}
