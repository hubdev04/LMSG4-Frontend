import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmeDashboardComponent } from './adme-dashboard.component';

describe('AdmeDashboardComponent', () => {
  let component: AdmeDashboardComponent;
  let fixture: ComponentFixture<AdmeDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdmeDashboardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdmeDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
