import { Routes } from '@angular/router'

// app pages
import { DashboardPageComponent } from '../pages/dashboard-page'

// features
import { featureNameMeasurements } from '../features'

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'dashboard',
  },
  {
    path: 'dashboard',
    component: DashboardPageComponent,
  },
  {
    path: featureNameMeasurements,
    loadChildren: () => import('../features/measurements/measurements.module').then(m => m.MeasurementsModule),
  },
]
