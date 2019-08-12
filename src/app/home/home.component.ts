import { Component, OnInit } from '@angular/core';
import { Category } from '../shared/models/category';
import { Config } from '../shared';
import { CategoryService } from '../entities/category/category.service';
import { DomSanitizer } from '@angular/platform-browser';
import { Topic } from '../shared/models/topic';
import { TopicService } from '../entities/topic/topic.service';
import { Observable } from 'rxjs';

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
    this.categoryService.getAllCategories().subscribe(categories => this.categories = categories);
  }

  getTopics(category: Category): Observable<Topic[]> {
    return this.categoryService.getTopics(category);
  }
}
