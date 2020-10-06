import {Component, OnInit} from '@angular/core';
import {TodoModel} from 'src/app/core/domain/todo.model';
import {GetTodosUsecase} from '../../core/usecases/get-all-todos.usecase';
import {CreateTodoUsecase} from '../../core/usecases/create-todo.usecase';
import {DeleteTodoByIdUsecase} from '../../core/usecases/delete-todo-by-id-usecase';

@Component({
  selector: 'hr-todo-container',
  templateUrl: './todo-container.component.html',
  styleUrls: ['./todo-container.component.scss']
})
export class TodoContainerComponent implements OnInit {

  todos: Array<TodoModel>;

  constructor(private getTodosUsecase: GetTodosUsecase,
              private createTodoUsecase: CreateTodoUsecase,
              private deleteTodoByIdUsecase: DeleteTodoByIdUsecase) {
  }

  ngOnInit(): void {
    this.getTodosUsecase.execute()
      .subscribe((todos: TodoModel[]) =>
        this.todos = todos);
  }

  deleteTodo(todoToBeDeleted: TodoModel): void {
    // Delete on UI
    this.todos = this.todos
      .filter((todo: TodoModel) =>
        todo !== todoToBeDeleted);

    // Delete on Server
    this.deleteTodoByIdUsecase.execute(todoToBeDeleted.id).subscribe();
  }

  addTodo(newTodo: TodoModel): void{
    this.createTodoUsecase
      .execute(newTodo)
      .subscribe(
        (todo: TodoModel) => {
          this.todos.push(todo);
        }
      );
  }
}
