import { Component, Input, OnInit} from '@angular/core';
import { Category, Config, Topic } from '../../../shared/models';
import { CategoryService } from '../../../entities/category/category.service';
import { ConfigService } from '../../../shared/service/config.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-topic-list-tidy',
  templateUrl: './topic-list-tidy.component.html',
  styleUrls: ['./topic-list-tidy.component.scss']
})
export class TopicListTidyComponent implements OnInit {


  @Input() categoryId: number;
  topics: Topic[] = [];
  config: Config;
  constructor(private categoryService: CategoryService, private configService: ConfigService, private sanitizer: DomSanitizer) { }

  ngOnInit() {
    this.configService.getConfig().subscribe(config => this.config = config);
    this.categoryService
      .getTopicsWithMainPostInfoByCid(this.categoryId, 0, 9, '')
      .subscribe(topics => {
        this.topics = topics;
      });
  }

  getImg(topic: Topic) {
    if (topic.thumb) {
      return topic.thumb;
    }
    return '/assets/uploads/system/site-logo.png';
  }

}
