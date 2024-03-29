import { Component, HostListener, Input, OnInit} from '@angular/core';
import { Topic } from '../../shared/models/topic';
import { TopicService } from '../topic/topic.service';
import { CategoryService } from './category.service';
import { ActivatedRoute } from '@angular/router';
import { Config } from '../../shared/models/config';
import { ConfigService } from '../../shared/service/config.service';
import { NgxMasonryOptions } from '../../shared/components/masonry/ngx-masonry-options';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {

  private blockList = '';

  @Input() categoryId: number;
  @Input() loadManually: boolean;
  @Input() set sortType(value: string) {
    if (value && value === this._oldSortType) {
      return;
    }
    this._oldSortType = value;
    this.start = 0;
    this.gettingTopic = false;
    this._sortType = value;
    this.topics = [];
    this.getTopics().then();
  }
  get sortType() {
    return this._sortType;
  }
  topics: Topic[] = [];
  queueTopics: Topic[] = [];
  loadedCount = 1;
  loadingCount = 0;
  config: Config;
  _sortType: string;
  _oldSortType: string;
  start = 0;
  topicFinished = false;
  pageSize = 10;
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
      return;
    }
    this.gettingTopic = true;
    let cid = this.categoryId;
    if (!cid) {
      cid = +this.activatedRoute.snapshot.paramMap.get('id');
    }
    this.config = await this.configService.getConfig().toPromise();
    const topics = await this.categoryService.getTopicsWithMainPostInfoByCid(cid, this.start, this.pageSize, this.sortType).toPromise();
    const filterTopics = topics.filter(topic => this.blockList.indexOf(String(topic.tid)) === -1);
    const blockOffset = topics.length - filterTopics.length;
    let topicSize = 0;
    if (filterTopics && filterTopics.length > 0) {
      topicSize = filterTopics.length;
    }
    if (topicSize) {
      const empty = this.queueTopics.length === 0;
      this.queueTopics = this.queueTopics.concat(topics);
      if (empty) {
        this.getNextTopic(false);
      }
    }
    if (topicSize < this.pageSize - blockOffset) {
      this.topicFinished = true;
    }
    this.start += (this.pageSize);
    if (!this.loadManually) {
      setTimeout((obj) => {
        obj.gettingTopic = false;
        obj.fix();
      }, 200, this);
    } else {
      this.gettingTopic = false;
    }
  }
  async getTopicsManually() {
    if (this.gettingTopic) {
      return;
    }
    this.gettingTopic = true;
    let cid = this.categoryId;
    if (!cid) {
      cid = +this.activatedRoute.snapshot.paramMap.get('id');
    }
    this.config = await this.configService.getConfig().toPromise();
    const topics = await this.categoryService.getTopicsWithMainPostInfoByCid(cid, this.start, this.pageSize, this.sortType).toPromise();
    const filterTopics = topics.filter(topic => this.blockList.indexOf(String(topic.tid)) === -1);
    const blockOffset = topics.length - filterTopics.length;
    let topicSize = 0;
    if (filterTopics && filterTopics.length > 0) {
      topicSize = filterTopics.length;
    }
    if (topicSize) {
      this.topics = this.topics.concat(filterTopics);
    }
    if (topicSize < this.pageSize - blockOffset) {
      this.topicFinished = true;
    }
    this.start += this.pageSize;
    this.gettingTopic = false;
  }

  ngOnInit() {
    // this.getTopics().then();
  }
  getImg(topic: Topic) {
    return topic.firstImg;
  }

  getNextTopic(loaded: boolean) {
    if (loaded) {
      if (this.loadedCount > this.loadingCount) {
        return;
      }
      this.loadedCount ++;
    }
    if (this.queueTopics.length > 0) {
        this.topics = this.topics.concat(this.queueTopics.shift());
        this.loadingCount ++;
    }
  }

  private fix() {
    const scrollY = document.body.scrollHeight - this.footerHeight - window.innerHeight;
    if (window.scrollY > scrollY && !this.topicFinished) {
      if (!this.gettingTopic) {
        this.getTopics().then();
      }
    }
  }

  @HostListener('window:scroll')
  public scrollListener(): void {
    if (!this.loadManually) {
      this.fix();
    }
  }

  @HostListener('window:resize')
  public resize(): void {
    if (!this.loadManually) {
      this.fix();
    }
  }

}
