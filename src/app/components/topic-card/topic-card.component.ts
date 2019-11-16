import { Component, Input, OnInit } from '@angular/core';
import { Topic } from '../../shared/models/topic';
import { ConfigService } from '../../shared/service/config.service';
import { Config } from '../../shared/models/config';

@Component({
  selector: 'app-topic-card',
  templateUrl: './topic-card.component.html',
  styleUrls: ['./topic-card.component.scss']
})
export class TopicCardComponent implements OnInit {

  @Input() topic: Topic;
  private config: Config;
  constructor(private configService: ConfigService) {}

  ngOnInit() {
    this.configService.getConfig().subscribe(config => this.config = config);
  }

  getImg(topic: Topic) {
    if (topic.thumb) {
      return topic.thumb;
    }
    return '/assets/uploads/system/site-logo.png';
  }

}
