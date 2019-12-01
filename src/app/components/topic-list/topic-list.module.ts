import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopicListTowLineComponent } from './topic-list-tow-line/topic-list-tow-line.component';
import { TopicListUgcComponent } from './topic-list-ugc/topic-list-ugc.component';

@NgModule({
  declarations: [TopicListTowLineComponent, TopicListUgcComponent],
  exports: [
    TopicListUgcComponent,
    TopicListTowLineComponent
  ],
  imports: [
    CommonModule
  ]
})
export class TopicListModule { }
