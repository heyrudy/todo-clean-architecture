import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'hr-add-todo-item-form-container',
  templateUrl: './add-todo-item-form-container.component.html',
  styleUrls: ['./add-todo-item-form-container.component.scss']
})
export class AddTodoItemFormContainerComponent implements OnInit {

  todoForm: FormGroup;
  submitted = false;
  @Output() addTodoItem: EventEmitter<any> = new EventEmitter();

  constructor(private formBuilder: FormBuilder) {
    this.todoForm = this.formBuilder.group({
      title: ['', [Validators.required]],
      task: ['', [Validators.required]]
    });
  }

  ngOnInit(): void {
  }

// convenience getter for easy access to form fields
  get f(): { [p: string]: AbstractControl } {
    return this.todoForm.controls;
  }

  onSubmit(): void {
    this.submitted = true;

    // stop here if form is invalid
    if (this.todoForm.invalid) {
      return;
    }

    const title = this.todoForm.get('title').value as string;
    const task = this.todoForm.get('task').value as string;
    if (title && task) {
      const newTodo = {
        title,
        task,
        completed: true
      };
      this.addTodoItem.emit(newTodo);
    }
  }
}
