import { Component, ElementRef, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  template: ''
})
export class AbstractPageComponent implements OnInit, OnDestroy {
  /**
   * element- and router-reference are generally used dependencies
   * so it is inevitable to inject them in constructor
   */
  constructor(
    public element: ElementRef,
    public router: Router
  ) {
    /**
     * set base page css class
     */
    this.element.nativeElement.classList.add('oaq-page-base');
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
  }
}
