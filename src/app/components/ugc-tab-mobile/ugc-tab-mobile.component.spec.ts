import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UgcTabMobileComponent } from './ugc-tab-mobile.component';

describe('UgcTabMobileComponent', () => {
  let component: UgcTabMobileComponent;
  let fixture: ComponentFixture<UgcTabMobileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UgcTabMobileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UgcTabMobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
