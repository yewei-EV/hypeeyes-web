import { Component, HostListener, OnInit } from '@angular/core';
import { Topic } from '../../shared/models/topic';
import { TopicService } from '../topic/topic.service';
import { CategoryService } from './category.service';
import { ActivatedRoute } from '@angular/router';
import { Config } from '../../shared/models/config';
import { ConfigService } from '../../shared/service/config.service';
import { NgxMasonryOptions } from 'ngx-masonry';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {

  topics: Topic[] = [];
  config: Config;
  start = 0;
  topicFinished = false;
  pageSize = 5;
  gettingTopic = false;
  footerHeight = 100;
  masonryOptions: NgxMasonryOptions = {
    transitionDuration: '0.2s',
    gutter: 20,
    resize: true,
    initLayout: true,
  };

  constructor(private categoryService: CategoryService, private topicService: TopicService, private activatedRoute: ActivatedRoute,
              private configService: ConfigService) {
  }

  async getTopics() {
    if (this.gettingTopic) {
      return ;
    }
    this.gettingTopic = true;
    const cid = +this.activatedRoute.snapshot.paramMap.get('id');
    this.config = await this.configService.getConfig().toPromise();
    const topics = await this.categoryService.getTopicsWithMainPostInfoByCid(cid, this.start, this.pageSize).toPromise();
    let topicSize = 0;
    if (topics && topics.length > 0) {
      topicSize = topics.length;
    }
    if (topicSize) {
      this.topics = this.topics.concat(topics);
    }
    if (topicSize < this.pageSize) {
      this.topicFinished = true;
    }
    this.start += this.pageSize;
    setTimeout((obj) => {
        obj.gettingTopic = false;
        obj.fix();
      }, 200, this);
  }

  ngOnInit() {
    this.getTopics().then();
  }

  getImg(topic: Topic) {
    return topic.firstImg;
  }

  private fix() {
    const scrollY = document.body.scrollHeight - this.footerHeight - window.innerHeight;
    if (window.scrollY > scrollY && !this.topicFinished) {
      // window.scrollTo(window.scrollX, scrollY);
      if (!this.gettingTopic) {
        this.getTopics().then();
      }
    }
  }

  @HostListener('window:scroll')
  public scrollListener(): void {
    this.fix();
  }

  @HostListener('window:resize')
  public resize(): void {
    this.fix();
  }

}
