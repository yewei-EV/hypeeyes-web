import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopicInfiniteScrollComponent } from './topic-infinite-scroll.component';
import { SharedModule } from '../../shared/shared.module';
import { TopicCardModule } from '../topic-card/topic-card.module';

@NgModule({
  declarations: [TopicInfiniteScrollComponent],
  exports: [
    TopicInfiniteScrollComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    TopicCardModule
  ]
})
export class TopicInfiniteScrollModule { }
