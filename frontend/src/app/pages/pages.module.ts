import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AbstractPageComponent } from './abstract.page.component';

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [],
  declarations: [
    AbstractPageComponent,
  ],
  exports: [
    AbstractPageComponent,
  ]
})
export class PagesModule {
}
