import { Component, Input, OnInit } from '@angular/core';
import { SwiperConfigInterface } from 'ngx-swiper-wrapper';

export class SliderData {
  url: string;
  imageUrl: string;
}

@Component({
  selector: 'app-default-slider-mobile',
  templateUrl: './default-slider-mobile.component.html',
  styleUrls: ['./default-slider-mobile.component.scss']
})
export class DefaultSliderMobileComponent implements OnInit {

  @Input() sliderDataArray: SliderData[];
  @Input() sliderConfig: SwiperConfigInterface;
  @Input() styleClass = 'default';

  constructor() { }

  ngOnInit() {
  }

  sendMessage(tid: string) {
    tid = tid.split('/')[2];
    console.log(tid)
    // @ts-ignore
    window.ReactNativeWebView.postMessage(tid);
  }
}
