import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DefaultSliderComponent } from './default-slider.component';

describe('DefaultSliderComponent', () => {
  let component: DefaultSliderComponent;
  let fixture: ComponentFixture<DefaultSliderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DefaultSliderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DefaultSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
