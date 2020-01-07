import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Category, TopicListInfo } from '../../shared/models';
import { CategoryService } from '../../entities/category/category.service';
import { Constant } from '../../shared';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {

  constructor(private route: ActivatedRoute, private categoryService: CategoryService) { }

  categories: Category[] = [];
  topicListInfo: TopicListInfo;
  linePerPage = 3;
  bannerPath: string;

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    if (id === 1) {
      this.bannerPath = '/assets/uploads/category/miji.png';
    }
    if (id === 4) {
      this.bannerPath = '/assets/uploads/category/baike.png';
    }
    if (id === 8) {
      this.bannerPath = '/assets/uploads/category/xishang.png';
    }
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
