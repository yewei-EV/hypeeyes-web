import { Component, OnInit } from '@angular/core';
import { Category } from '../shared/models/category';
import { Config } from '../shared';
import { CategoryService } from '../entities/category/category.service';
import { DomSanitizer } from '@angular/platform-browser';
import { Topic } from '../shared/models/topic';
import { TopicService } from '../entities/topic/topic.service';
import {forkJoin, Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import { Post } from '../shared/models/post';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  categories: Category[];
  removeCategoriesAnimation = Config.removeCategoriesAnimation;
  regexp = new RegExp(/<img[ ]+src="([^"]*)"/);

  constructor(private categoryService: CategoryService, private sanitizer: DomSanitizer, private topicService: TopicService) { }

  ngOnInit() {
    this.categoryService.getAllCategories().subscribe(categories => {
      this.categories = categories;
      this.categories.map(category => {
        if (!category.topics) {
          category.topics = [];
        }
        this.getTopicIds(category).subscribe(ids => {
          ids.map(id => {
            this.getTopicById(id).subscribe(topic => {
              category.topics.push(topic);
              this.topicService.getMainPostById(topic.tid).subscribe(post => topic.posts = [post]);
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
    let img = 'http://ec2-18-225-9-46.us-east-2.compute.amazonaws.com/assets/uploads/system/site-logo.jpg';
    if (posts && posts.length > 0) {
      const content = posts[0].content;
      const result = this.regexp.exec(content);
      if (result && result.length > 1) {
        img = result[1];
      }
    }
    return img;
  }
}
