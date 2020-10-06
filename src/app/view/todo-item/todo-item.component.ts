import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {TodoModel} from 'src/app/core/domain/todo.model';
import {UpdateTodoByIdUsecase} from '../../core/usecases/update-todo-by-id.usecase';

@Component({
  selector: 'hr-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent implements OnInit {

  @Input() todo: TodoModel;
  @Output() deleteTodoItem: EventEmitter<TodoModel> = new EventEmitter();

  constructor(private updateTodoByIdUsecase: UpdateTodoByIdUsecase) {
  }

  ngOnInit(): void {
  }

  setClasses(): { 'todo-item': boolean; 'is-complete': boolean } {
    return {
      'todo-item': true,
      'is-complete': this.todo.completed
    };
  }

  onToggle(todo: TodoModel): void {
    // Toggle on UI
    this.todo.completed = !todo.completed;

    // Toggle on Server
    this.updateTodoByIdUsecase.execute(todo);
    console.log(todo);
  }

  onDelete(todo: TodoModel): void {
    this.deleteTodoItem.emit(todo);
  }
}
