import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopicListUgcComponent } from './topic-list-ugc.component';

describe('TopicListUgcComponent', () => {
  let component: TopicListUgcComponent;
  let fixture: ComponentFixture<TopicListUgcComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopicListUgcComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopicListUgcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
