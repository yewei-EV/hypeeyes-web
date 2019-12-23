import { Component, Input, OnInit} from '@angular/core';
import { Category, Config, Topic } from '../../../shared/models';
import { CategoryService } from '../../../entities/category/category.service';
import { ConfigService } from '../../../shared/service/config.service';

@Component({
  selector: 'app-topic-list-ugc',
  templateUrl: './topic-list-ugc.component.html',
  styleUrls: ['./topic-list-ugc.component.scss']
})
export class TopicListUgcComponent implements OnInit {


  @Input() category: Category;
  @Input() pageNumber: number;
  @Input() topicNumberPerPage;
  @Input() showAllPreviews: boolean;
  @Input() set sortType(value: string) {
    if (value === this._oldSortType) {
      return;
    }
    this._oldSortType = value;
    this._sortType = value;
    this.topics = [];
    this.categoryService
      .getTopicsByCid(this.category.cid, this.pageNumber * this.topicNumberPerPage, this.topicNumberPerPage, value)
      .subscribe(topics => {
        this.topics = this.topics.concat(topics);
      });
  }
  get sortType() {
    return this._sortType;
  }
  _sortType: string;
  _oldSortType: string;
  topics: Topic[] = [];
  config: Config;
  constructor(private categoryService: CategoryService, private configService: ConfigService) { }

  ngOnInit() {
    this.configService.getConfig().subscribe(config => this.config = config);
    // this.categoryService
    //   .getTopicsByCid(this.category.cid, this.pageNumber * this.topicNumberPerPage, this.topicNumberPerPage, this.sortType)
    //   .subscribe(topics => {
    //     this.topics = this.topics.concat(topics);
    //   });
  }

}
