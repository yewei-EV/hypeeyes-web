import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Category, Config, Topic } from '../../../shared/models';
import { CategoryService } from '../../../entities/category/category.service';
import { ConfigService } from '../../../shared/service/config.service';

@Component({
  selector: 'app-topic-list-ugc',
  templateUrl: './topic-list-ugc.component.html',
  styleUrls: ['./topic-list-ugc.component.scss']
})
export class TopicListUgcComponent implements OnInit, OnChanges {


  @Input() category: Category;
  @Input() pageNumber: number;
  @Input() topicNumberPerPage;
  @Input() showAllPreviews: boolean;
  @Input() sortType: string;
  topics: Topic[] = [];
  config: Config;
  constructor(private categoryService: CategoryService, private configService: ConfigService) { }

  ngOnInit() {
    this.configService.getConfig().subscribe(config => this.config = config);
    this.categoryService
      .getTopicsByCid(this.category.cid, this.pageNumber * this.topicNumberPerPage, this.topicNumberPerPage, this.sortType)
      .subscribe(topics => {
        this.topics = this.topics.concat(topics);
      });
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (!changes.sortType.firstChange) {
      this.categoryService
        .getTopicsByCid(this.category.cid, this.pageNumber * this.topicNumberPerPage, this.topicNumberPerPage, this.sortType)
        .subscribe(topics => {
          this.topics = topics;
        });
    }
  }

}
