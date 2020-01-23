import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UgcMobilePageComponent } from './ugc-mobile-page.component';

describe('UgcPageComponent', () => {
  let component: UgcMobilePageComponent;
  let fixture: ComponentFixture<UgcMobilePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UgcMobilePageComponent ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UgcMobilePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
