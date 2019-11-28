import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UgcPageComponent } from './ugc-page.component';

describe('UgcPageComponent', () => {
  let component: UgcPageComponent;
  let fixture: ComponentFixture<UgcPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UgcPageComponent ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UgcPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
