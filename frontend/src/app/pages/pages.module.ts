import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AbstractPageComponent } from './abstract-page.component';
import { DashboardHttpService } from './dashboard-page/dashboard.http.service'

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [DashboardHttpService],
  declarations: [
    AbstractPageComponent,
  ],
  exports: [
    AbstractPageComponent,
  ],
})
export class PagesModule {
}
