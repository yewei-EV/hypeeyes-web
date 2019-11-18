import { Component, Input, OnInit } from '@angular/core';
import { SwiperConfigInterface } from 'ngx-swiper-wrapper';

export class SliderData {
  url: string;
  imageUrl: string;
}

@Component({
  selector: 'app-default-slider',
  templateUrl: './default-slider.component.html',
  styleUrls: ['./default-slider.component.scss']
})
export class DefaultSliderComponent implements OnInit {

  @Input() sliderDataArray: SliderData[];
  @Input() sliderConfig: SwiperConfigInterface;
  @Input() styleClass = 'default';

  constructor() { }

  ngOnInit() {
  }

}
