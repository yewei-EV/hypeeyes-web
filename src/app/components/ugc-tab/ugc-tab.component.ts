import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { Category, Topic, TopicListInfo } from '../../shared/models';

@Component({
  selector: 'app-ugc-tab',
  templateUrl: './ugc-tab.component.html',
  styleUrls: ['./ugc-tab.component.scss']
})
export class UgcTabComponent implements OnChanges {

  @Input() categories: Category[];
  @Input() topicListInfo: TopicListInfo;
  @Input() loadManually: boolean;
  sortType = 'newest_to_oldest';

  ngOnChanges(changes: SimpleChanges): void {
  }

  sendSortType(type: string) {
    this.sortType = type;
  }
}
