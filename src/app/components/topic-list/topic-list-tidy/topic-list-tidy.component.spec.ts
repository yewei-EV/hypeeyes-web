import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopicListTidyComponent } from './topic-list-tidy.component';

describe('TopicListTidyComponent', () => {
  let component: TopicListTidyComponent;
  let fixture: ComponentFixture<TopicListTidyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopicListTidyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopicListTidyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
