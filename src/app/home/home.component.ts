import { Component, OnInit } from '@angular/core';
import { Category } from '../shared/models/category';
import { CategoryService } from '../entities/category/category.service';
import { DomSanitizer } from '@angular/platform-browser';
import { Topic } from '../shared/models/topic';
import { TopicService } from '../entities/topic/topic.service';
import { Observable } from 'rxjs';
import { Post } from '../shared/models/post';
import { SwiperConfigInterface } from 'ngx-swiper-wrapper';
import { Config } from '../shared/models/config';
import { ConfigService } from '../shared/service/config.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  categoriesPgc: Category[];
  categoriesUgc: Category[];
  config: Config;
  swiperConfig: SwiperConfigInterface = {
    direction: 'horizontal',
    loop: true,
    keyboard: true,
    mousewheel: false,
    scrollbar: false,
    navigation: true,
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    },
    autoplay: true,
    effect: 'slide',
    slidesPerView: 'auto',
    // loopedSlides: 4,
    spaceBetween: 20,
    observer: true,
    centeredSlides: true,
    observeParents: true,
  };
  firstTopicList: Topic[] = [];

  constructor(private categoryService: CategoryService, private sanitizer: DomSanitizer, private topicService: TopicService,
              private configService: ConfigService) { }

  ngOnInit() {
    this.configService.getConfig().subscribe((config) => this.config = config);
    // PGC categories
    this.categoryService.getAllPgcCategories().subscribe(categories => {
      this.categoriesPgc = categories;
      this.categoriesPgc.map(category => {
        if (!category.topics) {
          category.topics = [];
        }
        this.getTopicsByCid(3, category.cid).subscribe(topic => {
          category.topics.push.apply(category.topics, topic);
        });
      });
    });
    // UGC categories
    this.categoryService.getAllUgcCategories().subscribe(categories => {
      this.categoriesUgc = categories;
      this.categoriesUgc.map(category => {
        if (!category.topics) {
          category.topics = [];
        }
        this.getTopicsByCid(11, category.cid).subscribe(topic => {
          category.topics.push.apply(category.topics, topic);
        });
      });
    });
  }

  getTopicIds(category: Category): Observable<number[]> {
    return this.categoryService.getTopicIds(category);
  }

  getTopicById(id: number): Observable<Topic> {
    return this.topicService.getById(id);
  }

  getImg(topic: Topic) {
    if (topic.thumb) {
      return topic.thumb;
    }
    return '/assets/uploads/system/site-logo.png';
  }

  private getTopicsByCid(num: number, cid: number) {
    return this.categoryService.getTopicsByCid(num, cid);
  }
}
