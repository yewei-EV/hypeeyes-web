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
    SlidersModule
  ],
  declarations: [
    CategoryCardComponent,
    CategoryTabComponent,
    UgcTabComponent,
    TopicCardComponent,
    TopicInfiniteScrollComponent,
  ]
})
export class ComponentsModule { }
