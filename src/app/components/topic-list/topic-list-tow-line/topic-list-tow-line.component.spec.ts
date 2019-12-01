import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopicListTowLineComponent } from './topic-list-tow-line.component';

describe('TopicListTowLineComponent', () => {
  let component: TopicListTowLineComponent;
  let fixture: ComponentFixture<TopicListTowLineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopicListTowLineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopicListTowLineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
