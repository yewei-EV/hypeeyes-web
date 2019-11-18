import { Component, OnInit } from '@angular/core';
import { Category, TopicListInfo } from '../../shared/models';
import { CategoryService } from '../../entities/category/category.service';
import { Constant } from '../../shared';

class Info {
  categories: Category[] = [];
  topicListInfo: TopicListInfo;
}

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  infoList: Info[] = [];
  categoriesForCard: Category[] = [];

  constructor(private categoryService: CategoryService) { }

  ngOnInit() {
    const categoryNameLists = [
      ['发售资讯', 'Nike', 'Adidas', 'Supreme', 'Kith'],
      ['潮流百科', '人物', '品牌'],
      ['美图细赏', '球鞋', '潮服', '上身驾驭'],
    ];
    for (const categoryNameList of categoryNameLists) {
      const info = new Info();
      for (const name of categoryNameList) {
        const category = new Category();
        category.name = name;
        info.categories.push(category);
        if (Constant.topicListInfoMap.has(name)) {
          info.topicListInfo = Constant.topicListInfoMap.get(name);
        }
      }
      this.infoList.push(info);
    }

    this.categoryService.getAllCategories().subscribe(categories => {
      let categoryId;
      for (const category of categories) {
        if (category.name === '潮目社区') {
          categoryId = category.cid;
        }
      }
      for (const category of categories) {
        if (categoryId === category) {
          this.categoriesForCard.concat(category, this.categoriesForCard);
        }
        if (categoryId === category.parentCid) {
          this.categoriesForCard.push(category);
        }
        for (const [index, categoryNameList] of categoryNameLists.entries()) {
          const nameIndex = categoryNameList.indexOf(category.name);
          if (nameIndex >= 0) {
            this.infoList[index].categories[nameIndex] = category;
            break;
          }
        }
      }
    });
  }

}
