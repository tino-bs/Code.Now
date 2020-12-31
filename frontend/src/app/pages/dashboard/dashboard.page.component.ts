import { Component, ElementRef, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { AbstractPageComponent } from '../abstract.page.component'

@Component({
  selector: 'oaq-dashboard-page',
  templateUrl: './dashboard.page.component.html'
})
export class DashboardPageComponent
  extends AbstractPageComponent
  implements OnInit, OnDestroy {

  constructor(
    public element: ElementRef,
    public router: Router,
  ) {
    super(element, router);
  }

  ngOnInit(): void {
    super.ngOnInit();
  }

  ngOnDestroy(): void {
    super.ngOnDestroy();
  }
}
