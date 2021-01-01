import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { TranslateModule } from '@ngx-translate/core'

// ui module
import { UiModule } from './ui/ui.module'

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,

    UiModule,
  ],
  exports: [
    CommonModule,
    TranslateModule,

    UiModule,
  ],
})
export class SharedModule {
}
