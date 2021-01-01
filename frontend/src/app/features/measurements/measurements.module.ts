import { NgModule } from '@angular/core'
import { StoreModule } from '@ngrx/store'
import { EffectsModule } from '@ngrx/effects'

// feature names
import { featureNameMeasurements } from '~/app/features'

// shared
import { SharedModule } from '~/app/shared/shared.module'

// store
import { measurementsReducer } from './store'
import { MeasurementsPageEffects } from './store/effects/measurements.page.effects'
import { MeasurementsContainerEffects } from './store/effects/measurements.container.effects'
import { MeasurementsFacade } from './store/measurements.facade'

// services
import { MeasurementsServiceModule } from './services/measurements.service.module'

// containers
import { MeasurementsContainerComponent } from './containers'

// routes
import { MeasurementsRouterModule } from './router/measurements-router.module'

// pages
import { MeasurementsPageComponent } from './pages/measurements-page'

// components
import { MeasurementsListComponent } from './components/measurements-list'

@NgModule({
  imports: [
    // shared
    SharedModule,

    // store
    StoreModule.forFeature(featureNameMeasurements, measurementsReducer),
    EffectsModule.forFeature([
      MeasurementsPageEffects,
      MeasurementsContainerEffects,
    ]),

    // services
    MeasurementsServiceModule,

    // routes
    MeasurementsRouterModule,
  ],
  declarations: [
    // containers
    MeasurementsContainerComponent,

    // pages
    MeasurementsPageComponent,

    // components
    MeasurementsListComponent,
  ],
  providers: [
    MeasurementsFacade,
  ],
})
export class MeasurementsModule {
}
