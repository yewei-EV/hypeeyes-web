import { Component, OnInit } from '@angular/core';
import { Category } from '../../shared/models/category';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {
  categories: Category[];

  constructor() { }

  ngOnInit() {
  }

  filter() {
    const defaultClass = 'col-md-3 col-sm-6 col-xs-12';
    this.categories.filter(category => category.class = category.class || defaultClass);
  }
}
