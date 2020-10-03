import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoContainerComponent } from './todo-container/todo-container.component';
import { TodoItemComponent } from './todo-item/todo-item.component';



@NgModule({
  declarations: [TodoContainerComponent, TodoItemComponent],
  exports: [
    TodoContainerComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ViewModule { }
