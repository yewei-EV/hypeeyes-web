import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DefaultSliderMobileComponent } from './default-slider-mobile.component';

describe('DefaultSliderMobileComponent', () => {
  let component: DefaultSliderMobileComponent;
  let fixture: ComponentFixture<DefaultSliderMobileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DefaultSliderMobileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DefaultSliderMobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
