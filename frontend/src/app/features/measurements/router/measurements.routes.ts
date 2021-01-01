import { Routes } from '@angular/router'

// containers
import { MeasurementsContainerComponent } from '../containers'

// pages
import { MeasurementsPageComponent } from '../pages/measurements-page'

export const ROUTES: Routes = [
  {
    path: '',
    component: MeasurementsContainerComponent,
    children: [
      {
        path: '',
        component: MeasurementsPageComponent,
      },
    ],
  },
]
