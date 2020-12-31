import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { AbstractContainerComponent } from './abstract-container.component'

@NgModule({
  imports: [
    CommonModule,
  ],
  providers: [],
  declarations: [
    AbstractContainerComponent,
  ],
  exports: [
    AbstractContainerComponent,
  ],
})
export class ContainerModule {
}
