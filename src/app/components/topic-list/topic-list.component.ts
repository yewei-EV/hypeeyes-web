import { Component, Input, OnInit } from '@angular/core';
import { Category, Config, Topic } from '../../shared/models';
import { CategoryService } from '../../entities/category/category.service';
import { ConfigService } from '../../shared/service/config.service';

@Component({
  selector: 'app-topic-list',
  templateUrl: './topic-list.component.html',
  styleUrls: ['./topic-list.component.scss']
})
export class TopicListComponent implements OnInit {

  @Input() category: Category;
  @Input() pageNumber: number;
  @Input() topicNumberPerPage;
  topics: Topic[] = [];
  config: Config;
  constructor(private categoryService: CategoryService, private configService: ConfigService) { }

  ngOnInit() {
    this.configService.getConfig().subscribe(config => this.config = config);
    this.categoryService.getTopicsByCid(this.category.cid, this.pageNumber * this.topicNumberPerPage, this.topicNumberPerPage)
      .subscribe(topics => {
        this.topics = this.topics.concat(topics);
      });
  }

}
