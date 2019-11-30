import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Category, TopicListInfo } from '../../shared/models';
import { CategoryService } from '../../entities/category/category.service';
import { Constant } from '../../shared';

@Component({
  selector: 'app-ugc-page',
  templateUrl: './ugc-page.component.html',
  styleUrls: ['./ugc-page.component.scss']
})
export class UgcPageComponent implements OnInit {

  constructor(private route: ActivatedRoute, private categoryService: CategoryService) { }

  categories: Category[] = [];
  topicListInfo: TopicListInfo;
  linePerPage = 3;

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.categoryService.getAllCategories().subscribe(categories => {
      for (const category of categories) {
        if (category.cid === id) {
          this.topicListInfo = Constant.topicListInfoMap.get(category.name);
          this.topicListInfo.showTitle = false;
          this.topicListInfo.line = this.linePerPage;
          delete this.topicListInfo.maxItems;
        }
        if (category.cid === id || category.parentCid === id) {
          this.categories.push(category);
        }
      }
    });
  }

}
