import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryCardComponent } from './category-card/category-card.component';
import { CategoryTabComponent } from './category-tab/category-tab.component';
import { TopicCardComponent } from './topic-card/topic-card.component';
import { TopicListComponent } from './topic-list/topic-list.component';
import { SharedModule } from '../shared/shared.module';
import { TopicInfiniteScrollComponent } from './topic-infinite-scroll/topic-infinite-scroll.component';
import { SlidersModule } from './sliders/sliders.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    SlidersModule,
  ],
  exports: [
    CategoryCardComponent,
    CategoryTabComponent,
    SlidersModule
  ],
  declarations: [
    CategoryCardComponent,
    CategoryTabComponent,
    TopicCardComponent,
    TopicListComponent,
    TopicInfiniteScrollComponent,
  ]
})
export class ComponentsModule { }
