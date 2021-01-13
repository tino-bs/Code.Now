import { Component, ElementRef, OnDestroy, OnInit } from '@angular/core'
import { Router } from '@angular/router'
import { AbstractPageComponent } from '../abstract-page.component'
import { DashboardHttpService } from './dashboard.http.service'

@Component({
  selector: 'oaq-dashboard-page',
  templateUrl: './dashboard-page.component.html',
})
export class DashboardPageComponent
  extends AbstractPageComponent
  implements OnInit, OnDestroy {

  greetings: string[] = []

  constructor (
    public element: ElementRef,
    public router: Router,
    private dashboardHttpService: DashboardHttpService,
  ) {
    super(element, router)
  }

  ngOnInit (): void {
    super.ngOnInit()

    this.dashboardHttpService.getGreeting()
    .subscribe((resp) => this.greetings = resp)

  }

  ngOnDestroy (): void {
    super.ngOnDestroy()
  }
}
