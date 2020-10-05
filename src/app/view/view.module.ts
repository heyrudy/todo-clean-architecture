import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TodoContainerComponent} from './todo-container/todo-container.component';
import {TodoItemComponent} from './todo-item/todo-item.component';
import {AddTodoItemFormContainerComponent} from './add-todo-item-form-container/add-todo-item-form-container.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {DataModule} from '../data/data.module';
import {CoreModule} from '../core/core.module';


@NgModule({
  imports: [
    CommonModule,
    CoreModule,
    DataModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    TodoContainerComponent,
    TodoItemComponent,
    AddTodoItemFormContainerComponent],
  exports: [
    TodoContainerComponent
  ]
})
export class ViewModule {
}
