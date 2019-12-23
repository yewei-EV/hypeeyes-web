import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoriesComponent } from './categories/categories.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ComponentsModule } from '../components/components.module';
import { UgcPageComponent } from './ugc-page/ugc-page.component';
import { CategoryModule } from '../entities/category/category.module';
import {TopicListModule} from '../components/topic-list/topic-list.module';

@NgModule({
  declarations: [
    HomePageComponent,
    CategoriesComponent,
    UgcPageComponent
  ],
    imports: [
        CommonModule,
        ComponentsModule,
        CategoryModule,
        TopicListModule
    ],
  exports: [
    HomePageComponent,
    CategoriesComponent,
    UgcPageComponent
  ]
})
export class PagesModule { }
