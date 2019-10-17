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
  categoriesSwiper: Category;
  categoryPublish: Category;
  categoryNews: Category;
  categoryWiki: Category;
  categoryPict: Category;
  categoryTech: Category;
  subCategoryNike: Category;
  subCategoryAdidas: Category;
  subCategorySupreme: Category;
  subCategoryKith: Category;
  subCategoryMan: Category;
  subCategoryBrand: Category;
  subCategoryShoe: Category;
  subCategoryCloth: Category;
  subCategoryShow: Category;
  categoriesUgc: Category[];
  config: Config;
  swiperConfig: SwiperConfigInterface = {
    direction: 'horizontal',
    loop: true,
    // loopedSlides: 6,
    initialSlide: 2,
    slidesPerView: 'auto',
    keyboard: false,
    mousewheel: false,
    scrollbar: false,
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
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
    speed: 1000,
  };
  tagSwiperConfig: SwiperConfigInterface = {
    slidesPerView: 4,
    spaceBetween: 40,
    slidesPerGroup: 4,
    loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
      // el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  };
  mouseIndex = 1;

  constructor(private categoryService: CategoryService, private sanitizer: DomSanitizer, private topicService: TopicService,
              private configService: ConfigService) { }

  private async getSwiperCategories() {
    const categories = await this.categoryService.getCategoryByName('首页置顶').toPromise();
    if (categories && categories[0]) {
      const topics = await this.getTopicsByCid(7, categories[0].cid).toPromise();
      for (const topic of topics) {
        const post = await this.topicService.getMainPostByTid(topic.tid).toPromise();
        topic.posts = [post];
      }
      categories[0].topics = topics;
      this.categoriesSwiper = categories[0];
    }
  }

  private async getPublishCategories() {
    const categories = await this.categoryService.getCategoryByName('发售日历').toPromise();
    if (categories && categories[0]) {
      const topics = await this.getTopicsByCid(3, categories[0].cid).toPromise();
      for (const topic of topics) {
        const post = await this.topicService.getMainPostByTid(topic.tid).toPromise();
        topic.posts = [post];
      }
      categories[0].topics = topics;
      this.categoryPublish = categories[0];
    }
  }

  private async getNewsCategories() {
    const categories = await this.categoryService.getCategoryByName('发售资讯').toPromise();
    if (categories && categories[0]) {
      const topics = await this.getTopicsByCid(3, categories[0].cid).toPromise();
      for (const topic of topics) {
        const post = await this.topicService.getMainPostByTid(topic.tid).toPromise();
        topic.posts = [post];
      }
      categories[0].topics = topics;
      this.categoryNews = categories[0];
    }
  }

  private async getWikiCategories() {
    const categories = await this.categoryService.getCategoryByName('潮流百科').toPromise();
    if (categories && categories[0]) {
      const topics = await this.getTopicsByCid(3, categories[0].cid).toPromise();
      for (const topic of topics) {
        const post = await this.topicService.getMainPostByTid(topic.tid).toPromise();
        topic.posts = [post];
      }
      categories[0].topics = topics;
      this.categoryWiki = categories[0];
    }
  }

  private async getPictCategories() {
    const categories = await this.categoryService.getCategoryByName('美图细赏').toPromise();
    if (categories && categories[0]) {
      const topics = await this.getTopicsByCid(3, categories[0].cid).toPromise();
      for (const topic of topics) {
        const post = await this.topicService.getMainPostByTid(topic.tid).toPromise();
        topic.posts = [post];
      }
      categories[0].topics = topics;
      this.categoryPict = categories[0];
    }
  }

  private async getCategories(cname: string) {
    const categories = await this.categoryService.getCategoryByName(cname).toPromise();
    if (categories && categories[0]) {
      const topics = await this.getTopicsByCid(3, categories[0].cid).toPromise();
      for (const topic of topics) {
        const post = await this.topicService.getMainPostByTid(topic.tid).toPromise();
        topic.posts = [post];
      }
      categories[0].topics = topics;
      return categories[0];
    }
  }



  ngOnInit() {
    this.configService.getConfig().subscribe((config) => this.config = config);
    // Slider
    this.getSwiperCategories().then();
    // 首页置顶
    this.getCategories('发售日历').then(object => {this.categoryPublish = object; });
    // 发售资讯
    this.getCategories('发售资讯').then(object => {this.categoryNews = object; });
    // 潮流百科
    this.getCategories('潮流百科').then(object => {this.categoryWiki = object; });
    // 美图细赏
    this.getCategories('美图细赏').then(object => {this.categoryPict = object; });
    // 抢购黑科技
    this.getCategories('抢购黑科技').then(object => {this.categoryTech = object; });

    // 发售资讯 Subcategories
    this.getCategories('Nike').then(object => {this.subCategoryNike = object; });
    this.getCategories('Adidas').then(object => {this.subCategoryAdidas = object; });
    this.getCategories('Supreme').then(object => {this.subCategorySupreme = object; });
    this.getCategories('Kith').then(object => {this.subCategoryKith = object; });

    // 潮流百科 Subcategories
    this.getCategories('人物').then(object => {this.subCategoryMan = object; });
    this.getCategories('品牌').then(object => {this.subCategoryBrand = object; });

    // 美图细赏 Subcategories
    this.getCategories('球鞋').then(object => {this.subCategoryShoe = object; });
    this.getCategories('潮服').then(object => {this.subCategoryCloth = object; });
    this.getCategories('上身驾驭').then(object => {this.subCategoryShow = object; });

    // 潮目社区
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
