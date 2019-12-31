import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UgcTabHomePageComponent } from './ugc-tab-home-page.component';

describe('UgcTabHomePageComponent', () => {
  let component: UgcTabHomePageComponent;
  let fixture: ComponentFixture<UgcTabHomePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UgcTabHomePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UgcTabHomePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
