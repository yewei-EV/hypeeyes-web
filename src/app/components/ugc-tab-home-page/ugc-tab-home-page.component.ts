import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { Category, Topic, TopicListInfo } from '../../shared/models';
import { ActivatedRoute } from '@angular/router';
import { CategoryService } from '../../entities/category/category.service';
import { Constant } from '../../shared';

@Component({
  selector: 'app-ugc-tab-home',
  templateUrl: './ugc-tab-home-page.component.html',
  styleUrls: ['./ugc-tab-home-page.component.scss']
})
export class UgcTabHomePageComponent implements OnInit {

  constructor(private route: ActivatedRoute, private categoryService: CategoryService) { }

  categories: Category[] = [];
  topicListInfo: TopicListInfo;
  sortType = 'newest_to_oldest';

  ngOnInit() {
    const id = 12;
    this.categoryService.getAllCategories().subscribe(categories => {
      for (const category of categories) {
        if (category.cid === id) {
          this.topicListInfo = Constant.topicListInfoMap.get(category.name);
          this.topicListInfo.showTitle = false;
          this.topicListInfo.line = 3;
          delete this.topicListInfo.maxItems;
        }
        if (category.cid === id || category.parentCid === id) {
          this.categories.push(category);
        }
      }
    });
  }
  sendSortType(type: string) {
    this.sortType = type;
  }
}
