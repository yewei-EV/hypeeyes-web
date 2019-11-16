import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopicInfiniteScrollComponent } from './topic-infinite-scroll.component';

describe('TopicInfiniteScrollComponent', () => {
  let component: TopicInfiniteScrollComponent;
  let fixture: ComponentFixture<TopicInfiniteScrollComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopicInfiniteScrollComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopicInfiniteScrollComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
