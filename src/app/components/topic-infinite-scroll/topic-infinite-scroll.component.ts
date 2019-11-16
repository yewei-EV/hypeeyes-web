import { Component, Input, OnInit } from '@angular/core';
import { Topic, TopicListInfo } from '../../shared/models';
import { CategoryService } from '../../entities/category/category.service';

@Component({
  selector: 'app-topic-infinite-scroll',
  templateUrl: './topic-infinite-scroll.component.html',
  styleUrls: ['./topic-infinite-scroll.component.scss']
})
export class TopicInfiniteScrollComponent implements OnInit {

  @Input() topicListInfo: TopicListInfo;
  throttle = 300;
  scrollDistance = 1;
  topics: Topic[];
  start = 0;
  finished = false;

  constructor(private categoryService: CategoryService) { }

  ngOnInit() {
  }

  onScroll() {
    this.categoryService.getTopicsByCid(this.topicListInfo.categoryId, this.start, this.topicListInfo.itemNumberPerLine * this.topicListInfo.line)
      .subscribe(topics => {
        this.topics = this.topics.concat(topics);
        if (topics.length < this.topicListInfo.itemNumberPerLine * this.topicListInfo.line) {
          this.finished = true;
        }
        if (this.topics.length >= this.topicListInfo.maxItems) {
          this.finished = true;
        }
      });
  }
}
