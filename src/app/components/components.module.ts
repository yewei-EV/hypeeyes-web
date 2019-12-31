import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryCardComponent } from './category-card/category-card.component';
import { CategoryTabComponent } from './category-tab/category-tab.component';
import { TopicCardComponent } from './topic-card/topic-card.component';
import { SharedModule } from '../shared/shared.module';
import { TopicInfiniteScrollComponent } from './topic-infinite-scroll/topic-infinite-scroll.component';
import { SlidersModule } from './sliders/sliders.module';
import { UgcTabComponent } from './ugc-tab/ugc-tab.component';
import { CategoryModule } from '../entities/category/category.module';
import { TopicListModule } from './topic-list/topic-list.module';
import { UgcTabHomePageComponent } from './ugc-tab-home-page/ugc-tab-home-page.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    SlidersModule,
    CategoryModule,
    TopicListModule,
  ],
  exports: [
    CategoryCardComponent,
    CategoryTabComponent,
    UgcTabComponent,
    SlidersModule,
    UgcTabHomePageComponent
  ],
  declarations: [
    CategoryCardComponent,
    CategoryTabComponent,
    UgcTabComponent,
    UgcTabHomePageComponent,
    TopicCardComponent,
    TopicInfiniteScrollComponent,
  ]
})
export class ComponentsModule { }
