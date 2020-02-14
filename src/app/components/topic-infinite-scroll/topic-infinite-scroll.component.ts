import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { Topic, TopicListInfo } from '../../shared/models';
import { CategoryService } from '../../entities/category/category.service';

@Component({
  selector: 'app-topic-infinite-scroll',
  templateUrl: './topic-infinite-scroll.component.html',
  styleUrls: ['./topic-infinite-scroll.component.scss']
})
export class TopicInfiniteScrollComponent implements OnInit {

  @Input() topicListInfo: TopicListInfo;
  @Input() categoryId: number;
  throttle = 300;
  scrollDistance = 1;
  topics: Topic[] = [];
  start = 0;
  finished = true;

  constructor(private categoryService: CategoryService) { }

  ngOnInit() {
    if (this.topicListInfo) {
      if (!this.topicListInfo.styleType) {
        switch (this.topicListInfo.itemNumberPerLine) {
          case 3:
            this.topicListInfo.styleType = 0;
            break;
          case 4:
            this.topicListInfo.styleType = 1;
            break;
          default:
            this.topicListInfo.styleType = 0;
            break;
        }
      }
      this.onScroll();
    }
  }

  onScroll() {
    if (!this.categoryId) {
      return;
    }
    this.categoryService
      .getTopicsByCid(this.categoryId, this.start, this.topicListInfo.itemNumberPerLine * this.topicListInfo.line, 'newest_to_oldest')
      .subscribe(topics => {
        this.topics = this.topics.concat(topics);
        if (topics.length < this.topicListInfo.itemNumberPerLine * this.topicListInfo.line) {
          this.finished = true;
        } else if (this.topics.length >= this.topicListInfo.maxItems) {
          this.finished = true;
        } else {
          this.finished = false;
        }
        this.start += topics.length;
      });
  }
  refresh() {
    this.categoryService
      .getTopicsByCid(this.categoryId, this.start, this.topicListInfo.itemNumberPerLine * this.topicListInfo.line, 'newest_to_oldest')
      .subscribe(topics => {
        if (topics.length === 0) {
          this.start = 0;
        } else {
          this.topics = topics;
          this.start = this.start += this.topicListInfo.itemNumberPerLine * this.topicListInfo.line;
          if (topics.length < this.topicListInfo.itemNumberPerLine * this.topicListInfo.line) {
            this.start = 0;
          }
        }
      });
  }
}
