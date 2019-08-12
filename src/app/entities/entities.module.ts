import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryComponent } from './category/category.component';
import { HttpClientModule } from '@angular/common/http';
import { TopicComponent } from './topic/topic.component';

@NgModule({
  declarations: [CategoryComponent, TopicComponent],
  exports: [
    CategoryComponent
  ],
  imports: [
    HttpClientModule,
    CommonModule
  ]
})
export class EntitiesModule { }
