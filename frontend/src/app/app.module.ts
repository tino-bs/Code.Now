import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

// basic modules
import { CoreModule } from './core/core.module'
import { SharedModule } from './shared/shared.module'

// containers
import { ContainerModule } from './containers/container.module'
import { AppContainerComponent } from './containers/app-container'

// router
import { AppRouterModule } from './router/app-router.module'

// pages
import { PagesModule } from './pages/pages.module'
import { DashboardPageComponent } from './pages/dashboard-page'

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,

    CoreModule,
    SharedModule,

    ContainerModule,
    AppRouterModule,
    PagesModule,
  ],
  declarations: [
    // containers
    AppContainerComponent,

    // pages
    DashboardPageComponent,
  ],
  providers: [],
  bootstrap: [AppContainerComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {
}
