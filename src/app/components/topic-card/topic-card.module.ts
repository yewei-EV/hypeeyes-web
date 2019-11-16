import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopicCardComponent } from './topic-card.component';

@NgModule({
  declarations: [TopicCardComponent],
  exports: [
    TopicCardComponent
  ],
  imports: [
    CommonModule
  ]
})
export class TopicCardModule { }
