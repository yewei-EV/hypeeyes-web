import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoriesComponent } from './categories/categories.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ComponentsModule } from '../components/components.module';
import { UgcPageComponent } from './ugc-page/ugc-page.component';
import { CategoryModule } from '../entities/category/category.module';
import {TopicListModule} from '../components/topic-list/topic-list.module';
import { UgcMobilePageComponent } from './ugc-mobile-page/ugc-mobile-page.component';

@NgModule({
  declarations: [
    HomePageComponent,
    CategoriesComponent,
    UgcPageComponent,
    UgcMobilePageComponent
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
    UgcPageComponent,
    UgcMobilePageComponent
  ]
})
export class PagesModule { }
