import {Component, Input, OnChanges, SimpleChanges, ViewChild} from '@angular/core';
import { Category, TopicListInfo } from '../../shared/models';
import {TopicInfiniteScrollComponent} from '../topic-infinite-scroll/topic-infinite-scroll.component';

@Component({
  selector: 'app-category-tab',
  templateUrl: './category-tab.component.html',
  styleUrls: ['./category-tab.component.scss']
})
export class CategoryTabComponent implements OnChanges {

  @Input() categories: Category[];
  @Input() topicListInfo: TopicListInfo;
  @ViewChild(TopicInfiniteScrollComponent, {static: false}) topicInfiniteScrollComponent: TopicInfiniteScrollComponent;

  ngOnChanges(changes: SimpleChanges): void {
  }

  clickRefresh() {
    this.topicInfiniteScrollComponent.refresh();
  }
}
