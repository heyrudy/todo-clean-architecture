import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {AboutComponent} from './layouts/about/about.component';
import {ViewModule} from './view/view.module';
import {TodoMockRepository} from './data/repository/todo-mock-repository/todo-mock.repository';
import {TodoRepository} from './core/repositories/todo.repository';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ViewModule
  ],
  providers: [
    {provide: TodoRepository, useClass: TodoMockRepository}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
