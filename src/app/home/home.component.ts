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
}
