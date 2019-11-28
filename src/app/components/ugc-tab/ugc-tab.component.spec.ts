import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UgcTabComponent } from './ugc-tab.component';

describe('UgcTabComponent', () => {
  let component: UgcTabComponent;
  let fixture: ComponentFixture<UgcTabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UgcTabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UgcTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
