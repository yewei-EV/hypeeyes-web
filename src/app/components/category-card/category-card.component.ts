import { Component, Input, OnInit } from '@angular/core';
import { Category } from '../../shared/models';

@Component({
  selector: 'app-category-card',
  templateUrl: './category-card.component.html',
  styleUrls: ['./category-card.component.scss']
})
export class CategoryCardComponent implements OnInit {
  @Input() categories: Category[];
  defaultImg = 'https://www.hypeeyes.com/assets/uploads/files/1568258148129-0659fb8a865d6007e3aa98dc3cd4fdba.jpg';
  constructor() { }

  ngOnInit() {
  }

}
