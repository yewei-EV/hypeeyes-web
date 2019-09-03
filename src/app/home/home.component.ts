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
  categories: Category[];
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
    // autoplay: true,
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
    const topics: Topic[] = [];
    this.categoryService.getAllCategories().subscribe(categories => {
      this.categories = categories;
      this.categories.map(category => {
        if (!category.topics) {
          category.topics = [];
        }
        const indexList = [];
        this.getTopicIds(category).subscribe(ids => {
          const index = +ids[0];
          indexList.push(index);
          ids.map(id => {
            this.getTopicById(id).subscribe(topic => {
              category.topics.push(topic);

              this.topicService.getMainPostById(topic.tid).subscribe(post => {
                if (indexList.indexOf(+topic.tid) >= 0) {
                  topics.push(topic);
                }
                topic.posts = [post];
                if (topics.length === categories.length) {
                  this.firstTopicList = topics.sort((a, b) => a.cid - b.cid).map(firstTopic => firstTopic);
                }
              });
            });
          });
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

  getImg(posts: Post[]) {
    if (posts && posts.length > 0) {
      return posts[0].firstImg;
    }
    return 'http://ec2-18-225-9-46.us-east-2.compute.amazonaws.com/assets/uploads/system/site-logo.png';
  }
}
