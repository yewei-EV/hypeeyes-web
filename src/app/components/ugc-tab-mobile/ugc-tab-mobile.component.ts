import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { Category, Topic, TopicListInfo } from '../../shared/models';

@Component({
  selector: 'app-ugc-tab-mobile',
  templateUrl: './ugc-tab-mobile.component.html',
  styleUrls: ['./ugc-tab-mobile.component.scss']
})
export class UgcTabMobileComponent implements OnChanges {

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
