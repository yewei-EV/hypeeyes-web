import { Component, OnInit } from '@angular/core';
import { Category, TopicListInfo } from '../shared/models';
import { CategoryService } from '../entities/category/category.service';

class Info {
  categories: Category[];
  topicListInfo: TopicListInfo;
}

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  infoArray: Info[];

  constructor(private categoryService: CategoryService) { }

  ngOnInit() {
    const categoryNames = [
      ['发售资讯', 'Nike', 'Adidas', 'Supreme', 'Kith'],
      ['潮流百科', '人物', '品牌'],
      ['美图细赏', '球鞋', '潮服', '上身驾驭'],
    ];
    const topicListInfos: TopicListInfo[][] = [
      [{line: 1, itemNumberPerLine: 3}, {line: 1, itemNumberPerLine: 3}, {line: 1, itemNumberPerLine: 3},
        {line: 1, itemNumberPerLine: 3}, {line: 1, itemNumberPerLine: 3}],
      [{line: 1, itemNumberPerLine: 3}, {line: 1, itemNumberPerLine: 3}, {line: 1, itemNumberPerLine: 3}],
      [{line: 1, itemNumberPerLine: 4}, {line: 1, itemNumberPerLine: 4}, {line: 1, itemNumberPerLine: 4},
        {line: 1, itemNumberPerLine: 4}],
    ];
    for (const name of categoryNames) {
      this.infoArray.push(new Info());
    }


    this.categoryService.getAllCategories().subscribe(categories => {
      for (const category of categories) {
        const index = categoryNames.indexOf(name);
        if (index > 0) {
          this.infoArray[index].categories = categories;
        }
      }
    });
  }

}
