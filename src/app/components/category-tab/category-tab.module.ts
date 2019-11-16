import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryTabComponent } from './category-tab.component';
import { TopicCardModule } from '../topic-card/topic-card.module';
import { TopicInfiniteScrollModule } from '../topic-infinite-scroll/topic-infinite-scroll.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [CategoryTabComponent],
  imports: [
    CommonModule,
    TopicCardModule,
    TopicInfiniteScrollModule,
    NgbModule,
  ],
  exports: [CategoryTabComponent],
})
export class CategoryTabModule { }
