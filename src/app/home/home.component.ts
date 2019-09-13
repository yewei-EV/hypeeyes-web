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
import {animate, state, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [
    trigger('shortLong', [
      // ...
      state('short', style({
        position: 'absolute',
        top: '378px',
        'max-width': '90%',
        width: '90%',
        transition: 'all .6s',
        opacity: 1,
        transform: 'translateX(-50%)',
        left: '50%',
        color: '#fff',
        'font-size': '16px',
        'line-height': 'normal',
        'text-shadow': '1px 1px 5px rgba(0, 0, 0, .65)'
      })),
      state('long', style({
        background: 'rgba(0, 0, 0, 0.4)',
        position: 'absolute',
        top: '105px',
        left: '50%',
        transform: 'translateX(-50%)',
        'max-width': '90%',
        'z-index': 1,
        transition: 'all .6s',
        opacity: 0,
        width: '90%',
        'font-size': '15px',
        margin: '0 10px',
        padding: '5px',
        'text-shadow': '1px 0 black, 0 -1px black',
        'border-radius': '5px',
        color: '#fff',
        overflow: 'hidden',
        'max-height': '253px'
      })),
      transition('short => long', [
        animate('1s')
      ]),
      transition('long => short', [
        animate('0.5s')
      ]),
    ]),
  ]
})

export class HomeComponent implements OnInit {
  categoriesPgc: Category[];
  categoriesUgc: Category[];
  categoriesSwiper: Category;
  config: Config;
  active: boolean;
  swiperConfig: SwiperConfigInterface = {
    direction: 'horizontal',
    loop: true,
    loopedSlides: 4,
    initialSlide: 1,
    slidesPerView: 'auto',
    keyboard: false,
    mousewheel: false,
    scrollbar: false,
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      // clickable: true
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    autoplay: true,
    effect: 'slide',
    spaceBetween: 20,
    observer: true,
    centeredSlides: true,
    observeParents: true,
  };
  mouseIndex = 1;

  constructor(private categoryService: CategoryService, private sanitizer: DomSanitizer, private topicService: TopicService,
              private configService: ConfigService) { }

  ngOnInit() {
    this.configService.getConfig().subscribe((config) => this.config = config);
    // Swiper categories
    this.categoryService.getSwiperCategories().subscribe(categories => {
      this.categoriesSwiper = categories && categories[0];
      const category = this.categoriesSwiper;
      if (category) {
        if (!category.topics) {
          category.topics = [];
        }
        this.getTopicsByCid(3, category.cid).subscribe(topics => {
          category.topics = topics || [];
          category.topics.map(topic => {
            this.topicService.getMainPostByTid(topic.tid).subscribe(post => {
              topic.posts = [post];
            });
          });
        });
      }
    });

    // PGC categories
    this.categoryService.getAllPgcCategories().subscribe(categories => {
      this.categoriesPgc = categories;
      this.categoriesPgc.map(category => {
        if (!category.topics) {
          category.topics = [];
        }
        this.getTopicsByCid(3, category.cid).subscribe(topics => {
          category.topics = topics;
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
        this.getTopicsByCid(11, category.cid).subscribe(topics => {
          category.topics = topics;
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
