import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTodoItemFormContainerComponent } from './add-todo-item-form-container.component';

describe('AddTodoItemFormContainerComponent', () => {
  let component: AddTodoItemFormContainerComponent;
  let fixture: ComponentFixture<AddTodoItemFormContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddTodoItemFormContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddTodoItemFormContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
