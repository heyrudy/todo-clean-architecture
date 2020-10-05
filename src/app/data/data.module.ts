import {NgModule} from '@angular/core';
import {SharedModule} from '../shared/shared.module';
import {HttpClientModule} from '@angular/common/http';


@NgModule({
  imports: [
    SharedModule,
    HttpClientModule
  ]
})
export class DataModule {
}
