import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { ROUTES } from './measurements.routes'

@NgModule({
  imports: [RouterModule.forChild(ROUTES)],
  exports: [RouterModule],
})
export class MeasurementsRouterModule {
}
