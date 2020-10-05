import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {AboutComponent} from './layouts/about/about.component';
import {ViewModule} from './view/view.module';
import {TodoRepository} from './core/repositories/todo.repository';
import {HeaderComponent} from './layouts/header/header.component';
import {TodoWebRepository} from './data/repository/todo-web-repository/todo-web.repository';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ViewModule
  ],
  providers: [
    {provide: TodoRepository, useClass: TodoWebRepository},
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
