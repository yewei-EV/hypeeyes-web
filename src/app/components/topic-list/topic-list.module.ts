import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopicListTowLineComponent } from './topic-list-tow-line/topic-list-tow-line.component';
import { TopicListUgcComponent } from './topic-list-ugc/topic-list-ugc.component';
import { TopicListTidyComponent } from './topic-list-tidy/topic-list-tidy.component';
import { NgbTabsetModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [TopicListTowLineComponent, TopicListUgcComponent, TopicListTidyComponent],
  exports: [
    TopicListUgcComponent,
    TopicListTowLineComponent,
    TopicListTidyComponent
  ],
  imports: [
    CommonModule,
    NgbTabsetModule
  ]
})
export class TopicListModule { }
