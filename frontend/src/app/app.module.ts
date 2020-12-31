import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// basic modules
import { CoreModule } from './core/core.module';
import { UiModule } from './ui/ui.module'

// app container
import { AppContainerComponent } from './app-container';

// routing and pages
import { AppRoutingModule } from './routing/app-routing.module';
import { PagesModule } from './pages/pages.module'
import { DashboardPageComponent } from './pages/dashboard-page';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,

    CoreModule,
    UiModule,
    PagesModule,

    AppRoutingModule
  ],
  declarations: [
    AppContainerComponent,
    DashboardPageComponent
  ],
  providers: [],
  bootstrap: [AppContainerComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {
}
