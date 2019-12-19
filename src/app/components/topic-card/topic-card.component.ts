import { Component, HostBinding, Input, OnInit } from '@angular/core';
import { Config, Topic } from '../../shared/models';
import { ConfigService } from '../../shared/service/config.service';

class Style {
  width: string;
  aspectRatio: string;
}

@Component({
  selector: 'app-topic-card',
  templateUrl: './topic-card.component.html',
  styleUrls: ['./topic-card.component.scss']
})
export class TopicCardComponent implements OnInit {

  @Input() topic: Topic;
  @Input() styleType: number;
  @HostBinding('style.width') width: string;
  style: Style;
  private styles: Style[] = [
    {width: '32.5%', aspectRatio: '66.6%'},
    {width: '24%', aspectRatio: '90%'}
  ];

  config: Config;
  constructor(private configService: ConfigService) {}

  ngOnInit() {
    this.style = this.styles[this.styleType];
    this.width = this.style.width;
    this.configService.getConfig().subscribe(config => this.config = config);
  }

  getImg(topic: Topic) {
    if (topic.thumb) {
      return topic.thumb;
    }
    return '/assets/uploads/system/site-logo.png';
  }

}
