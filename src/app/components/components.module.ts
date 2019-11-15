import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryCardModule } from './category-card/category-card.module';
import { CategoryTabModule } from './category-tab/category-tab.module';

@NgModule({
  imports: [
    CommonModule,
    CategoryCardModule,
    CategoryTabModule
  ],
  exports: [
    CategoryCardModule,
    CategoryTabModule,
  ],
  declarations: []
})
export class ComponentsModule { }
