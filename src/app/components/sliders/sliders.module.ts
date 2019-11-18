import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SwiperModule } from 'ngx-swiper-wrapper';
import { DefaultSliderComponent } from './default-slider/default-slider.component';

@NgModule({
  declarations: [DefaultSliderComponent],
  exports: [
    DefaultSliderComponent
  ],
  imports: [
    CommonModule,
    SwiperModule
  ]
})
export class SlidersModule { }
