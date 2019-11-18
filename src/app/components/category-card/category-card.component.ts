import { Component, Input, OnInit } from '@angular/core';
import { Category } from '../../shared/models';

@Component({
  selector: 'app-category-card',
  templateUrl: './category-card.component.html',
  styleUrls: ['./category-card.component.scss']
})
export class CategoryCardComponent implements OnInit {
  @Input() categories: Category[];
  constructor() { }

  ngOnInit() {
  }

}
