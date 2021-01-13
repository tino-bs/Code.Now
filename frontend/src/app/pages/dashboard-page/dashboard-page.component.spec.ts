import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing'

import { DashboardPageComponent } from './dashboard-page.component';
import { TranslateModule } from '@ngx-translate/core'
import { PagesModule } from '../pages.module'
import { CoreModule } from '../../core/core.module'
import { DashboardHttpService } from './dashboard.http.service'

describe('DashboardPageComponent', () => {
  let component: DashboardPageComponent;
  let fixture: ComponentFixture<DashboardPageComponent>;
  let dashboardHttpService: jasmine.SpyObj<DashboardHttpService>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        CoreModule,
        PagesModule,
        RouterTestingModule,
        TranslateModule.forRoot()
      ],
      declarations: [DashboardPageComponent]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    dashboardHttpService = jasmine.createSpyObj('DashboardHttpService', ['getGreeting']);
    fixture = TestBed.createComponent(DashboardPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
