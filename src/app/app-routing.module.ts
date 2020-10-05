import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {TodoContainerComponent} from './view/todo-container/todo-container.component';
import {AboutComponent} from './layouts/about/about.component';

const routes: Routes = [
  {
    path: '',
    component: TodoContainerComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
